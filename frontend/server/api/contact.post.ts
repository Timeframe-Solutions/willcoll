import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log("Incoming body:", body);

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    console.error(parsed.error.flatten());

    throw createError({
      statusCode: 400,
      statusMessage: JSON.stringify(parsed.error.flatten()),
    });
  }

  const data = parsed.data;

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.zohoHost,
    port: 465,
    secure: true,
    auth: {
      user: config.zohoUser,
      pass: config.zohoPass,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: config.zohoUser,
    to: config.contactEmail,
    replyTo: data.email,
    subject: `Website enquiry from ${data.fullName}`,
    html: `
      <h2>Website Enquiry</h2>

      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>

      <hr>

      <p>${data.message}</p>
    `,
  });

  return {
    success: true,
  };
});
