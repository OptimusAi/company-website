"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

type FormMode = "demo" | "design-partner" | "contact";

const interestOptions = ["Voice", "Lead", "Office", "AR", "Analyst", "Not sure"];

export function LeadForm({ mode = "demo" }: { mode?: FormMode }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const isPartner = mode === "design-partner";

  async function submit(formData: FormData) {
    setStatus("loading");
    setMessage("");

    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType: mode }),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error || "We couldn’t submit the form.");

      setStatus("success");
      setMessage(result.message || "Thanks — we’ll be in touch soon.");
      track(isPartner ? "design_partner_form_submitted" : "demo_form_submitted");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Request received.</h2>
        <p>{message}</p>
        <button className="text-button" type="button" onClick={() => setStatus("idle")}>Send another request</button>
      </div>
    );
  }

  return (
    <form
      className="lead-form"
      action={submit}
      onFocus={() => track(isPartner ? "design_partner_form_started" : "demo_form_started")}
    >
      <div className="honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="faxNumber" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-grid">
        <label>
          Full name <span>*</span>
          <input name="fullName" required autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Work email <span>*</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
        <label>
          Company <span>*</span>
          <input name="company" required autoComplete="organization" placeholder="Company name" />
        </label>
        {isPartner ? (
          <label>
            Company website
            <input name="website" type="url" autoComplete="url" placeholder="https://" />
          </label>
        ) : (
          <label>
            Role / title
            <input name="role" autoComplete="organization-title" placeholder="Your role" />
          </label>
        )}
        <label>
          Company size
          <select name="companySize" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>1–20</option><option>21–100</option><option>101–500</option><option>501+</option>
          </select>
        </label>
        {isPartner ? (
          <label>
            Industry
            <input name="industry" placeholder="e.g. Construction" />
          </label>
        ) : null}
        <label className={isPartner ? "" : "form-wide"}>
          Product interest <span>*</span>
          <select name="productInterest" required defaultValue="">
            <option value="" disabled>Choose a product</option>
            {interestOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="form-wide">
          {isPartner ? "What workflow or problem should we explore?" : "What would you like to automate?"}
          <textarea name="details" rows={5} placeholder="A short description helps us prepare." />
        </label>
        {isPartner ? (
          <label className="form-wide">
            Desired outcome
            <textarea name="desiredOutcome" rows={3} placeholder="What would meaningful progress look like?" />
          </label>
        ) : null}
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>I agree that Optimus AI may contact me about this request. <b>*</b></span>
      </label>
      {status === "error" ? <p className="form-error" role="alert">{message}</p> : null}
      <button className="button button-submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : isPartner ? "Apply to Become a Design Partner" : mode === "contact" ? "Send Request" : "Request Demo"}
      </button>
      <p className="form-note">We use your information only to respond to this request. Please don’t include confidential data.</p>
    </form>
  );
}
