# NexuzBee ICT Website

Modern responsive business website for **NexuzBee ICT Solutions**, built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Backend and database

- Contact enquiries are stored in a local SQLite database at `data/nexuzbee.db`
- The schema is created automatically on first run
- API endpoint: `POST /api/enquiries`
- Private admin view: `/admin/enquiries?token=YOUR_TOKEN`

Create a local environment file before using the admin page:

```bash
copy .env.example .env.local
```

Then set:

```env
ADMIN_DASHBOARD_TOKEN=your-private-token
```

## Edit content and branding

- Main text content, navigation, testimonials, services and founder details: `lib/site-data.ts`
- Global layout, metadata and fonts: `app/layout.tsx`
- Shared styling: `app/globals.css`
- Contact form behaviour: `components/contact-form.tsx`
- Database setup: `lib/db.ts`
- Enquiry validation and shared types: `lib/enquiries.ts`
- Per-page content: files in `app/`
