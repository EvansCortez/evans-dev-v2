# Evans Cortez Portfolio

Personal portfolio built with Next.js, React, and Tailwind CSS. It includes project case studies, a resume download, SEO metadata, and a contact form with an optional Resend-backed email route.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. Portfolio content lives in `src/data/portfolio.ts`.

## Contact Form

The contact form posts to `app/api/contact/route.ts`. It works as a mail app fallback without configuration, and sends through Resend when these environment variables are set:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=evans.cortez23@stjohns.edu
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

Use a verified sender/domain for `CONTACT_FROM_EMAIL` before production email delivery.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
