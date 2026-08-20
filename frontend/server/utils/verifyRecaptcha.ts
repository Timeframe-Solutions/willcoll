/**
 * Server-side helper to verify a Google reCAPTCHA v3 token.
 * v3 returns a success flag AND a score (0.0–1.0). We reject scores below
 * the threshold (0.5 is Google's recommended default).
 */
export async function verifyRecaptcha(token?: string, remoteip?: string) {
  const config = useRuntimeConfig()
  const secret = config.recaptchaSecretKey

  // No secret configured → skip for local dev
  if (!secret) {
    console.warn('reCAPTCHA secret key is missing. Verification skipped in dev.')
    return true
  }

  if (!token) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Security verification failed: reCAPTCHA token is missing.',
    })
  }

  let res: any
  try {
    // Google siteverify expects application/x-www-form-urlencoded body for POST
    res = await $fetch<any>('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
        ...(remoteip ? { remoteip } : {}),
      }).toString(),
    })
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to reach Google reCAPTCHA service. Please try again.',
    })
  }

  if (!res.success) {
    const codes = res['error-codes']?.join(', ') ?? 'unknown'
    console.warn(`reCAPTCHA v3 verification failed: ${codes}`)
    throw createError({
      statusCode: 400,
      statusMessage: 'Security verification failed. Please try again.',
    })
  }

  // v3-specific: reject low-confidence scores (bots score near 0.0)
  const score: number = res.score ?? 1
  if (score < 0.5) {
    console.warn(`reCAPTCHA v3 score too low: ${score}`)
    throw createError({
      statusCode: 400,
      statusMessage: 'Security check failed. If you are human, please try again.',
    })
  }

  return true
}
