# NextJS Zurich Frontend

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 14](https://nextjs.org/)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [Auth.js](https://authjs.dev)
- Database - [Postgres](https://vercel.com/postgres)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started

During the deployment, Vercel will prompt you to create a new Postgres database. This will add the necessary environment variables to your project.

Inside the Vercel Postgres dashboard, create a table based on the schema defined in this repository.

Copy the `.env.example` file to `.env` and update the values.
Update `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` to the value your Google Console
Generate a random secret for `AUTH_SECRET`

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3001.
