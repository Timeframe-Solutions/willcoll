import { z } from 'zod'

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]
const MAX_FILE_BYTES = 10 * 1024 * 1024

const schema = z.object({
  companyName: z.string().min(2),
  clientReference: z.string().optional(),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  noticeType: z.string().min(2),
  instructions: z.string().optional(),
  website: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  const parts = await readMultipartFormData(event)
  if (!parts) {
    throw createError({ statusCode: 400, statusMessage: 'No form data received.' })
  }

  const fields: Record<string, string> = {}
  let attachment: { filename: string; content: Buffer; contentType?: string } | undefined

  for (const part of parts) {
    if (part.filename) {
      const type = part.type || 'application/octet-stream'
      if (!ALLOWED_TYPES.includes(type)) {
        throw createError({
          statusCode: 400,
          statusMessage: 'File type not supported. Please upload a PDF, Word, image, Excel or PowerPoint file.',
        })
      }
      if (part.data.length > MAX_FILE_BYTES) {
        throw createError({
          statusCode: 400,
          statusMessage: 'File is too large. Maximum size is 10MB.',
        })
      }
      attachment = { filename: part.filename, content: part.data, contentType: type }
    } else if (part.name) {
      fields[part.name] = (part.data?.toString('utf8') || '').trim()
    }
  }

  const parsed = schema.safeParse(fields)
  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: 'Please check your details and try again.' })
  }

  const data = parsed.data

  // Honeypot
  if (data.website && data.website.length > 0) {
    return { success: true }
  }

  await sendSiteMail({
    subject: `Notice submission from ${data.companyName}`,
    replyTo: data.email,
    attachments: attachment ? [attachment] : undefined,
    html: `
      <h2>Notice Submission (Existing Client)</h2>
      <p><strong>Company:</strong> ${data.companyName}</p>
      <p><strong>Client reference:</strong> ${data.clientReference || '—'}</p>
      <p><strong>Contact name:</strong> ${data.contactName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || '—'}</p>
      <p><strong>Notice type:</strong> ${data.noticeType}</p>
      <p><strong>Instructions:</strong> ${data.instructions || '—'}</p>
      ${attachment ? `<p><strong>Attachment:</strong> ${attachment.filename}</p>` : '<p><strong>Attachment:</strong> none</p>'}
    `,
  })

  return { success: true }
})
