# Hostinger Deployment Guide

Last reviewed: August 17, 2026

## Important compatibility note

This website cannot be uploaded directly to Hostinger shared Web, WordPress, or Cloud hosting. It is a full-stack Node.js application with server-rendered pages, an API route, database-backed form submissions, and email notifications. Hostinger documents Node.js as a VPS workload because its shared and cloud plans do not provide the required root-level runtime access.

The current code also targets Cloudflare Workers through Vinext and stores form submissions in Cloudflare D1. D1 is a Cloudflare-only database binding and is not available on a Hostinger VPS.

Therefore, a full Hostinger deployment has two phases:

1. Migrate the Cloudflare-specific runtime and database integration to a standard Node.js deployment.
2. Deploy the migrated application to a Hostinger VPS.

Do not upload `dist`, `.next`, or the raw project to `public_html`. The pages might partially load, but dynamic routes, the contact form, database storage, and notification emails will not work correctly.

## Recommended Hostinger product

Use a **Hostinger VPS**, not shared Web Hosting.

Recommended VPS template:

- Ubuntu 24.04 with CloudPanel, or
- Ubuntu with Node.js and OpenLiteSpeed.

The application requires Node.js `22.13.0` or newer, as declared in `package.json`.

Official Hostinger references:

- [Is Node.js supported at Hostinger?](https://support.hostinger.com/en/articles/1583661-is-node-js-supported-at-hostinger)
- [Deploying a Node/Vite application to a Hostinger VPS](https://support.hostinger.com/en/articles/10164793-how-to-deploy-bolt-new-applications-to-your-hostinger-vps)
- [Hostinger VPS operating-system templates](https://support.hostinger.com/en/articles/1583571-what-are-the-available-operating-systems-for-vps)

## Phase 1 — Required application migration

Complete and test these changes before pointing the production domain to Hostinger.

### 1. Replace Cloudflare D1

Recommended production database: PostgreSQL on the VPS or a managed PostgreSQL provider.

Required code changes:

- Replace `drizzle-orm/d1` in `db/index.ts` with the selected PostgreSQL driver.
- Replace the `cloudflare:workers` environment import with `process.env.DATABASE_URL`.
- Convert `db/schema.ts` from `sqliteTable` definitions to PostgreSQL definitions.
- Change `drizzle.config.ts` from the SQLite dialect to PostgreSQL.
- Generate and apply the initial production migration.
- Remove the D1 declaration from `.openai/hosting.json` after the Node runtime no longer uses it.

Do not point production at a developer laptop database or commit a database password to Git.

### 2. Replace the Cloudflare-only build target

The current `vite.config.ts` loads the Cloudflare Vite plugin and builds a Worker-compatible application. Before Hostinger deployment, convert the project to a standard production Node.js target and ensure these commands work on a clean Linux environment:

```bash
npm ci
npm run build
npm run start
```

The production server must listen on a configurable port and bind to `127.0.0.1` or `0.0.0.0` as required by the CloudPanel reverse proxy.

### 3. Preserve form email delivery

The contact, demo, and Design Partner forms send notifications through Resend. Verify `optimus-ai.com` in Resend before production use.

Set these values only in the production environment:

```text
NEXT_PUBLIC_SITE_URL=https://optimus-ai.com
RESEND_API_KEY=<secret Resend API key>
RESEND_FROM_EMAIL=Optimus AI Website <info@optimus-ai.com>
DEMO_REQUEST_TO_EMAIL=info@optimus-ai.com
DESIGN_PARTNER_TO_EMAIL=info@optimus-ai.com
DATABASE_URL=<secret PostgreSQL connection string>
```

Never paste secrets into chat, commit them to Git, or place them in a public repository.

Resend reference: [Send Email API](https://resend.com/docs/api-reference/emails/send-email)

## Phase 2 — Provision the Hostinger VPS

1. In Hostinger hPanel, purchase or open a VPS.
2. Install **Ubuntu 24.04 with CloudPanel**.
3. Record the VPS IP address and create a non-root deployment user.
4. In CloudPanel, choose **Add Site → Node.js**.
5. Enter `optimus-ai.com` as the domain.
6. Select Node.js 22 or a later compatible release.
7. Keep the application behind CloudPanel’s reverse proxy rather than exposing its Node port publicly.

Hostinger VPS plans are self-managed. Enable automatic security updates, use SSH keys, disable password-based root login after access is confirmed, and allow only required firewall ports.

## Phase 3 — Deploy the source code

The repository should be private and accessible to the deployment user through a GitHub deploy key. Do not embed a personal access token in the repository URL.

From the application directory created by CloudPanel:

```bash
git clone git@github.com:OptimusAi/company-website.git .
git switch main
npm ci
npm run build
```

If the production branch is temporarily `develop`, deploy it only to a staging subdomain. Merge tested releases into `main` before production deployment.

## Phase 4 — Configure production secrets

Create a server-side environment file readable only by the deployment user, or enter the values through the process manager’s protected environment configuration.

Required values:

- `NEXT_PUBLIC_SITE_URL`
- `DATABASE_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `DEMO_REQUEST_TO_EMAIL`
- `DESIGN_PARTNER_TO_EMAIL`

After changing environment values, rebuild if the variable starts with `NEXT_PUBLIC_`, then restart the application.

## Phase 5 — Run with PM2

Install PM2 once on the VPS if the selected template does not already provide it:

```bash
npm install --global pm2
```

Start the application from its project directory:

```bash
pm2 start npm --name optimus-website -- start
pm2 save
pm2 startup
```

Run the final command printed by `pm2 startup` so the website returns after a VPS reboot.

Useful checks:

```bash
pm2 status
pm2 logs optimus-website
```

Do not expose submitted form contents or secret environment values in logs.

## Phase 6 — Connect the domain

In the DNS zone that currently controls `optimus-ai.com`:

1. Point the apex `A` record (`@`) to the Hostinger VPS IPv4 address.
2. Point `www` to the apex domain with a `CNAME`, or add the redirect in CloudPanel.
3. Remove conflicting old `A` and `AAAA` records only after confirming they are no longer needed.
4. Allow DNS propagation.
5. In CloudPanel, issue a Let’s Encrypt certificate for both `optimus-ai.com` and `www.optimus-ai.com`.
6. Redirect HTTP to HTTPS and choose one canonical host.

Keep existing email-related DNS records intact, including MX, SPF, DKIM, DMARC, and Resend verification records.

## Phase 7 — Production verification

Verify all of the following before announcing the deployment:

- Homepage and every navigation route load over HTTPS.
- Product and solution dropdowns close after selecting a link.
- Mobile navigation works.
- `/contact` submits successfully.
- `/design-partner` submits successfully.
- Each submission appears in the production database.
- Notification emails arrive at `info@optimus-ai.com` with the visitor as reply-to.
- A failed or invalid submission does not send an email.
- Rate limiting and the spam honeypot still work.
- Favicon, social preview, metadata, privacy, and terms pages load.
- No API keys, database credentials, or internal error details appear in browser responses.

## Updating the live site

After a new release is merged to `main`:

```bash
git pull --ff-only origin main
npm ci
npm run build
pm2 restart optimus-website --update-env
```

Run the production verification checklist after every deployment.

## Rollback

Before updating, record the currently deployed commit:

```bash
git rev-parse HEAD
```

If a release fails, switch the server to the previously recorded commit, reinstall dependencies, rebuild, and restart PM2. Do not delete the production database or environment file during a code rollback.

## Lower-risk alternative

If migrating D1 and the Cloudflare runtime is not desired, keep the application hosted on Cloudflare and use Hostinger only for domain registration or DNS management. This preserves the existing database and Worker runtime while still allowing `optimus-ai.com` to remain managed through Hostinger.
