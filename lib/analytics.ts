export type AnalyticsEvent =
  | "hero_demo_clicked"
  | "hero_explore_clicked"
  | "product_card_clicked"
  | "product_cta_clicked"
  | "nav_cta_clicked"
  | "demo_form_started"
  | "demo_form_submitted"
  | "design_partner_form_started"
  | "design_partner_form_submitted";

declare global {
  interface Window {
    posthog?: { capture: (event: string, properties?: Record<string, string>) => void };
  }
}

export function track(
  event: AnalyticsEvent,
  properties?: Record<string, string>,
) {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(event, properties);
  }
}
