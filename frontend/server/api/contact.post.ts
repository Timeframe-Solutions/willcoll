export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.fullName || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Name, email, and message are required.'
    })
  }

  console.log('Contact form submission received:', body)

  return {
    success: true,
    message: 'Contact received'
  }
})
