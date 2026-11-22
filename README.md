# NetsukeAI

Marketing website for NetsukeAI. It presents the partnership offer for established businesses and a separate page for founders preparing an investor-ready product.

## Project overview

The site has two pages that share one header, one footer, and one contact section. The home page explains the partnership, the working process, security, and a savings estimate. The startups page explains what a founder leaves with, the build options, a pitch timeline, and a readiness check.

Copy, imagery, and interaction stay in the page components. There is no content API and no account system.

## Website pages

| Route | Purpose |
| --- | --- |
| `/` | Home. Partnership, services, process, security, growth, calculator, commitments, and FAQ. |
| `/startups` | Founders. Hero, deliverables, build packages, pitch timeline, readiness check, and FAQ. |

Both routes render the shared header, the contact section, and the footer around the page content. Navigation items without a destination are visible and not linked.

## Technology stack

- Next.js 16.4.6 (App Router)
- React 19.3.0
- TypeScript 5
- Tailwind CSS 4.3.3
- Outfit, loaded with `next/font`
- `lucide-react` for interface icons

ESLint 9 with `eslint-config-next` is used for linting. Class names are combined in `src/lib/utils.ts`.

## Project structure

```
netsukeai-next/
├── public/
│   └── images/                 Logos, banners, icons, and the workflow GIF
├── src/
│   ├── app/
│   │   ├── layout.tsx          Shared header, contact section, and footer
│   │   ├── page.tsx            Home route
│   │   ├── globals.css         Tokens, base type, and section spacing
│   │   └── startups/
│   │       └── page.tsx        Startups route
│   ├── components/
│   │   ├── layout/             Header, navigation, mobile drawer, footer
│   │   ├── shared/             Contact form and FAQ list
│   │   ├── ui/                 Button, container, section label
│   │   ├── home/               Home page sections
│   │   └── startups/           Startups page sections
│   ├── lib/
│   │   ├── calculator.ts       Savings estimate inputs and formula
│   │   ├── navigation.ts       Primary navigation items
│   │   ├── site.ts             Site name and page descriptions
│   │   └── utils.ts            Class name helper
│   └── styles/
│       └── sections.css        Section layout and interaction styles
├── components.json             UI style settings. The application build does not load this file.
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Getting started

Install [Node.js](https://nodejs.org/) 20.9 or later and npm. This repository includes `package-lock.json`, so use npm.

```bash
npm install
```

## Local development

From `netsukeai-next/`:

```bash
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000). The startups page is [http://localhost:3000/startups](http://localhost:3000/startups).

## Available scripts

| Script | Command | What it does |
| --- | --- | --- |
| `dev` | `npm run dev` | Starts the Next.js development server. |
| `typecheck` | `npm run typecheck` | Runs `tsc --noEmit`. |
| `lint` | `npm run lint` | Runs ESLint. |
| `build` | `npm run build` | Creates the production build. |
| `start` | `npm start` | Serves the production build. Run `npm run build` first. |

## Production build

```bash
npm run build
npm start
```

`npm start` serves the built application on port 3000. The home page, the startups page, and the not-found page are prerendered as static content.

## Styling and design system

`src/app/globals.css` holds the color, type, spacing, and breakpoint tokens, plus the base rules for `body`, headings, and paragraphs. Custom breakpoints are `micro` (450px), `content` (546px), `xs` (576px), `tablet` (768px), `lap` (992px), `nav` (1024px), `wide` (1200px), `desktop` (1280px), `panel` (1536px), and `ultra` (1600px). Tailwind's `sm`, `md`, `lg`, `xl`, and `2xl` remain available.

`src/styles/sections.css` holds the layout for each page section, including the flip cards, protection sequence, growth columns, partner tabs, calculator, FAQs, build selector, pitch timeline, and readiness check.

`src/components/home/hero.css` holds the hero entrance motion. That file is imported by the home and startups heroes.

Reusable controls live in `src/components/ui/`:

- `Button` draws the pill links and buttons.
- `Container` sets the shared content width.
- `SectionLabel` draws the small section heading and rule.

Tailwind utilities are used next to these stylesheets. Prefer an existing token or an existing section class before adding a new one.

## Components and architecture

`src/app/layout.tsx` wraps every page with `Header`, the page content, `ContactForm`, and `Footer`.

`src/app/page.tsx` and `src/app/startups/page.tsx` compose the sections for that route. Each section is its own component. A section is a client component only when it needs state, a scroll listener, or the current path. The header itself is a server component. The desktop links and the mobile drawer are client components because they read the current route and the open state.

Interactive sections:

- Home flip cards, workflow steps, protection sequence, growth sequence, partner tabs, calculator, and commitments.
- Startups build selector and readiness check.
- Shared FAQ accordion and contact tabs.

## Static assets

Image files live in `public/images/`. Components reference them as `/images/<file>`, usually through `next/image`. Section backgrounds and the pitch arrow are referenced from `src/styles/sections.css` with the same `/images/` paths.

The logo is `logo.png`. Banners, service icons, protection icons, build icons, pitch icons, and `work_flow.gif` are in the same folder. There is no separate icon font. Interface icons come from `lucide-react`.

## Environment configuration

The application does not read environment variables. No `.env` file is required for local development or for a production build.

`.gitignore` ignores `.env*` files. Do not commit secrets if a future integration needs them.

## Forms and external services

The contact section offers “Book A Call” and “Write To Us”. Both forms are rendered in the browser. Submitting a form calls `preventDefault` and does not send the values anywhere. There is no API route, form endpoint, or email integration.

The footer links to the NetsukeAI LinkedIn page and to `contact@netsukeai.com`. Those are ordinary links.

## Deployment

This repository does not include a host configuration or a production domain.

A Node.js host can run the production server after:

```bash
npm install
npm run build
npm start
```

Set the process working directory to `netsukeai-next/`. The server listens on port 3000 unless `PORT` is set by the host.

## Maintenance notes

- Page titles and descriptions are in `src/lib/site.ts`. The startups route sets its own title and description in `src/app/startups/page.tsx`.
- Navigation labels and destinations are in `src/lib/navigation.ts`.
- Calculator defaults and the savings formula are in `src/lib/calculator.ts`.
- Keep new imagery in `public/images/` and use the existing `/images/` path. Backgrounds referenced only from CSS are still required.
- Motion is implemented with CSS and the existing client components. Reduced motion is handled in those components and in the hero stylesheet.
- There is no custom favicon and no Open Graph image. Metadata is the site name and the two page descriptions.
