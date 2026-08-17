import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <LegalPage title="Terms"><h2>Starter terms</h2><p>These terms are a structural placeholder for professional legal review before the website is used in production. They do not create product availability, service levels, warranties, or commercial commitments.</p><h2>Website information</h2><p>Content on this website is provided for general information about Optimus AI and its product direction. Product descriptions, maturity labels, and roadmap concepts may change as products are developed and validated.</p><h2>Roadmap concepts</h2><p>Items identified as planned, future opportunities, or roadmap concepts are not currently available products and should not be interpreted as a commitment to deliver.</p><h2>Acceptable use</h2><p>Visitors must not attempt to disrupt, probe, misuse, or gain unauthorized access to the website or its supporting systems.</p><h2>Professional review required</h2><p>Final terms should identify the correct legal entity, governing law, limitations, intellectual-property terms, privacy relationship, and contact details.</p></LegalPage>;
}
