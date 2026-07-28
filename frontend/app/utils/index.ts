// app/utils/index.ts
// Auto-imported utility functions for use across the app.
// Add pure helper functions here — no Vue/Nuxt-specific imports.

/**
 * Truncates a string to a max length, appending ellipsis.
 */
export const truncate = (str: string, maxLen = 120): string =>
  str.length > maxLen ? str.slice(0, maxLen).trimEnd() + '…' : str

/**
 * Formats a date string to a human-readable format (e.g. "July 2025").
 */
export const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-KE', { year: 'numeric', month: 'long' })
}
