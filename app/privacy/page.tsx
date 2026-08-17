import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return <LegalPage title="Privacy"><h2>About this notice</h2><p>This starter notice explains the intended approach for information submitted through the Optimus AI website. It is not final legal advice and must be reviewed by qualified counsel before production launch.</p><h2>Information we collect</h2><p>We may collect contact and company information you choose to provide through demo, contact, or Design Partner forms, together with limited technical information required to operate and protect the website.</p><h2>How we use information</h2><p>Submitted information is intended to be used to respond to requests, evaluate potential product fit, improve website operations, and prevent abuse. Sensitive free-text content should not be included in website forms.</p><h2>Analytics</h2><p>Website analytics are intended to measure page and conversion activity without capturing confidential form content, passwords, authentication tokens, customer documents, or financial data.</p><h2>Contact</h2><p>Questions about privacy can be submitted through the website contact page. A production policy should include the appropriate legal entity, contact details, retention periods, rights, and jurisdiction-specific disclosures.</p></LegalPage>;
}
