const normalizeSiteUrl = (url: string) => {
  const trimmed = url.replace(/\/+$/, "")

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed
  }

  // Default to http for local dev hosts, https otherwise.
  if (trimmed.startsWith("localhost") || trimmed.startsWith("127.0.0.1")) {
    return `http://${trimmed}`
  }

  return `https://${trimmed}`
}

const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fallacyguide.com"
)

export const metadataBase = new URL(siteUrl)

export const canonicalPath = (path = "/") =>
  path.startsWith("/") ? path : `/${path}`

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteUrl}${normalizedPath}`
}
