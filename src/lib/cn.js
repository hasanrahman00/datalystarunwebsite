// Tiny classnames joiner — filters falsy values and joins with spaces.
export function cn(...parts) {
  return parts.flat().filter(Boolean).join(' ')
}
