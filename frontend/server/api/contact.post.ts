import { z } from 'zod'

const schema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(),
  recaptchaToken: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please check your details and try again.',
    })
  }

  const data = parsed.data

  // Honeypot — hidden field that humans never see; bots fill it.
  if (data.website && data.website.length > 0) {
    return { success: true }
  }

  // Validate Google reCAPTCHA
  await verifyRecaptcha(data.recaptchaToken)

  await sendSiteMail({
    subject: `Website enquiry from ${data.fullName}`,
    replyTo: data.email,
    html: `
      <h2>Website Enquiry</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Company:</strong> ${data.company || '—'}</p>
      <p><strong>Job title:</strong> ${data.jobTitle || '—'}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || '—'}</p>
      <p><strong>Service:</strong> ${data.service || '—'}</p>
      <p><strong>Budget:</strong> ${data.budget || '—'}</p>
      <hr />
      <p>${data.message}</p>
    `,
  })

  return { success: true }
})

