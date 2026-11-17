# Enquiry form + Admin panel — setup

## What changed
- New enquiry form (same questions as the old Google Form) at **/contact** and embedded in the homepage **Contact** section
- All 10 "Book a call / Start project" buttons now go to /contact instead of the Google Form
- Admin panel at **/admin** — password login, list/search/filter, status (New → Contacted → Qualified → Won/Lost), notes, call/email/WhatsApp buttons, delete, CSV export
- Email alert to admin@varnidigital.com.au for every new enquiry (via Zoho)
- Spam protection (hidden honeypot field + rate limiting)
- New file `server.ts` (Express) — the site now runs as a small Node server instead of static files

## Environment variables (set in Cloud Run → Edit & deploy new revision → Variables & Secrets)
| Variable | Value |
|---|---|
| `ADMIN_PASSWORD` | your admin login password (**required**) |
| `SESSION_SECRET` | any long random string |
| `STORAGE` | `firestore` (so enquiries survive redeploys) |
| `SMTP_PASS` | Zoho **App Password** for admin@varnidigital.com.au |
| `NOTIFY_TO` | email(s) to receive alerts (default admin@varnidigital.com.au) |

## One-time: turn on Firestore (Google Cloud Console, same project as the Cloud Run service)
1. Console → Firestore → **Create database** → Native mode → region `australia-southeast1`
2. IAM → give the Cloud Run service account the role **Cloud Datastore User**

## Zoho app password
Zoho Mail → Settings → Security → App Passwords → Generate → paste into `SMTP_PASS`.

## Deploy
```
npm install
npm run build
gcloud run deploy varni-digital --source . --region australia-southeast1 --allow-unauthenticated
```
(Or open the project in Google AI Studio and redeploy — it will pick up server.ts.)

## Run locally
```
cp .env.example .env    # set ADMIN_PASSWORD
npm install
npm run dev             # http://localhost:3000  and  /admin
```
Locally, enquiries save to ./data/enquiries.json.
