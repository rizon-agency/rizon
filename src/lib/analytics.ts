/**
 * Umami analytics taxonomy.
 *
 * Umami already auto-tracks pageviews (including next-intl SPA route changes),
 * referrers, UTM params, devices, and countries. The names below are the custom
 * business-outcome events from the SEO plan's "Measure business outcomes" goal:
 * CTA and email-link clicks, and contact-form starts and submissions (which on
 * this site means booking and email actions).
 *
 * Privacy rule: never attach personal data (names, emails, message content) to
 * an event. Event properties describe *where* and *what*, never *who*.
 *
 * Most events are wired declaratively with `data-umami-event` attributes on the
 * relevant element; the `track` helper below is for the few cases (e.g. the
 * locale dropdown) that are not a plain link or button click.
 */
export const AnalyticsEvent = {
  /** cal.com booking click, the primary conversion. */
  BookCall: "book-call",
  /** Any mailto: click. */
  EmailClick: "email-click",
  /** The copy-email button in the contact section. */
  CopyEmail: "copy-email",
  /** Any CTA that sends the visitor to the #contact section. */
  ContactCta: "contact-cta",
  /** Outbound click to a social profile. */
  OutboundSocial: "outbound-social",
  /** Visitor changes the site language. */
  LocaleSwitch: "locale-switch",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];

/**
 * Send a custom event to Umami. No-op on the server or before the tracker
 * script has loaded, so callers never need to guard.
 */
export function track(
  event: AnalyticsEventName,
  data?: Record<string, string>,
): void {
  if (typeof window === "undefined") return;
  window.umami?.track(event, data);
}
