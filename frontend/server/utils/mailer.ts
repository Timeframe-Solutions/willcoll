import nodemailer from 'nodemailer'

export interface SiteAttachment {
  filename: string
  content: Buffer
  contentType?: string
}

/**
 * Shared mailer used by all Willcoll server endpoints.
 * Sends via the authenticated Zoho SMTP transport configured in runtimeConfig.
 */
export async function sendSiteMail(opts: {
  subject: string
  html: string
  replyTo?: string
  attachments?: SiteAttachment[]
}) {
  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    host: config.zohoHost,
    port: 465,
    secure: true,
    auth: {
      user: config.zohoUser,
      pass: config.zohoPass,
    },
  })

  await transporter.sendMail({
    from: config.zohoUser,
    to: config.contactEmail,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
    attachments: opts.attachments,
  })
}
