/**
 * Helper to verify Google reCAPTCHA v2 token on the server.
 */
export async function verifyRecaptcha(token?: string, remoteip?: string) {
  const config = useRuntimeConfig()
  const secret = config.recaptchaSecretKey

  // If secret key is not configured, we log a warning but allow it for easy local testing.
  if (!secret) {
    console.warn('reCAPTCHA secret key (RECAPTCHA_SECRET_KEY) is missing. Verification skipped.')
    return true
  }

  if (!token) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Security verification failed: reCAPTCHA token is missing.',
    })
  }

  try {
    const res: any = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      params: {
        secret,
        response: token,
        remoteip,
      },
    })

    if (!res.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Security verification failed: invalid or expired reCAPTCHA token.',
      })
    }

    return true
  } catch (error: any) {
    if (error.statusCode) throw error
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to verify reCAPTCHA with Google. Please try again.',
    })
  }
}
