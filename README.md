# Built Rite Handyman Services LLC — Website

A **frontend-only** responsive single-page site (React + TypeScript + Vite). No backend, database, booking system or email sending.

The quote form is a **non-functional demo**: it shows an on-page confirmation only and never sends or stores anything.

## Quick start

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

Build for static hosting:

```bash
npm run build
```

The deployable site is created in `dist/`.

## Where to edit

- `site.ts` — business name, **dummy** phone/email/address/hours, services and quotes, **sample** reviews, FAQs, nav, image paths.
- `styles.css` — all styling. Colors are CSS variables at the top (`--clay` is the amber accent, `--pine` the slate). The hero photo is set in the `.hero` rule.
- Image files in the project root — photos (`hero.jpg`, `flooring.jpg`, `door.jpg`, `painting.jpg`, `plumbing.jpg`, `workbench.jpg`, `before-after.jpg`). Replace a file with the same name to swap a photo.

## Before launch

- Replace the dummy contact details with real, verified ones.
- Replace the sample reviews with verified customer reviews.
- Connect the form to a real service (email, CRM or form backend) if it should send enquiries.

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab repo (or run `npx vercel` inside the folder).
2. In Vercel choose **Add New → Project** and import the repo.
3. Vercel detects **Vite** automatically (settings are also in `vercel.json`): build command `npm run build`, output directory `dist`. No environment variables are needed.
4. Click **Deploy**.

Optional: `npm run typecheck` checks the TypeScript without building.

Note: this is the **flat layout** (all files in the project root, no folders), so it can be uploaded to GitHub through the web uploader as-is.
