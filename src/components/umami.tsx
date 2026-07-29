import Script from "next/script";

/**
 * Umami analytics tracker (self-hosted).
 *
 * Reads config from public env vars so nothing is hardcoded:
 *  - NEXT_PUBLIC_UMAMI_SRC          full URL to the tracker script (e.g. https://analytics.rizon.agency/script.js)
 *  - NEXT_PUBLIC_UMAMI_WEBSITE_ID   the website UUID from the Umami dashboard
 *  - NEXT_PUBLIC_UMAMI_DOMAINS      (optional) comma-separated domains to restrict tracking to, e.g. "rizon.agency"
 *
 * Renders nothing when the required vars are absent, so local dev without
 * config never sends events. Umami auto-tracks SPA route changes.
 */
export function Umami() {
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const domains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  if (!src || !websiteId) {
    return null;
  }

  return (
    <Script
      src={src}
      data-website-id={websiteId}
      data-domains={domains}
      strategy="afterInteractive"
    />
  );
}
