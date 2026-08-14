import { z } from 'zod'

const schema = z.object({
  company: z.string().min(2),
  referenceToken: z.string().optional(),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  numberOfUsers: z.string().optional(),
  employeeEmails: z.string().optional(),
  instructions: z.string().optional(),
  website: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: 'Please check your details and try again.' })
  }

  const data = parsed.data

  // Honeypot
  if (data.website && data.website.length > 0) {
    return { success: true }
  }

  await sendSiteMail({
    subject: `Staff activation request from ${data.company}`,
    replyTo: data.email,
    html: `
      <h2>Staff Activation Request (Existing Corporate Subscription Client)</h2>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Corporate reference / token:</strong> ${data.referenceToken || '—'}</p>
      <p><strong>Contact name:</strong> ${data.contactName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || '—'}</p>
      <p><strong>Number of new users:</strong> ${data.numberOfUsers || '—'}</p>
      <p><strong>Employee emails:</strong></p>
      <pre style="white-space: pre-wrap;">${data.employeeEmails || '—'}</pre>
      <p><strong>Instructions:</strong> ${data.instructions || '—'}</p>
    `,
  })

  return { success: true }
})
