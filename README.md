# NexuzBee ICT Website

Modern responsive business website for **NexuzBee ICT Solutions**, built with Next.js App Router, React, TypeScript, Tailwind CSS, and a Postgres-backed enquiry system ready for Vercel deployment.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Backend and database

- Contact enquiries are stored in Postgres
- The schema is created automatically on first run
- API endpoint: `POST /api/enquiries`
- Private admin view: `/admin/enquiries?token=YOUR_TOKEN`

Create a local environment file before using the admin page:

```bash
copy .env.example .env.local
```

Then set:

```env
POSTGRES_URL=your-postgres-connection-string
ADMIN_DASHBOARD_TOKEN=your-private-token
```

You can use a Neon Postgres database connected through the Vercel Marketplace for production.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add a Postgres integration from the Vercel Marketplace.
4. Add these environment variables in Vercel:
   - `POSTGRES_URL`
   - `ADMIN_DASHBOARD_TOKEN`
5. Deploy.

Recommended domain setup:

- Primary domain: `nexuzbee.co.uk`
- Redirect domain: `nexuzbee.com`

In Vercel project settings, add:

- `nexuzbee.co.uk`
- `www.nexuzbee.co.uk`
- `nexuzbee.com`
- `www.nexuzbee.com`

Then set `nexuzbee.co.uk` as the primary domain and redirect the others to it.

## Edit content and branding

- Main text content, navigation, testimonials, services and founder details: `lib/site-data.ts`
- Global layout, metadata and fonts: `app/layout.tsx`
- Shared styling: `app/globals.css`
- Contact form behaviour: `components/contact-form.tsx`
- Database setup: `lib/db.ts`
- Enquiry validation and shared types: `lib/enquiries.ts`
- Per-page content: files in `app/`
