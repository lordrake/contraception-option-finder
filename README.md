# Contraception Option Finder

A Next.js foundation for a future block-based CMS implementation. The project is currently file-backed: page content, translations, and component examples live in structured project files rather than a database or CMS.

## Current Scope

- Next.js App Router with TypeScript and Tailwind CSS.
- Locale routing for English and Italian.
- English is the default locale and uses unprefixed routes.
- Italian routes are prefixed with `/it`.
- Slugs are shared between locales and are not translated.
- Structured JSON files provide page content and translations.
- Accessible primitive components wrap core HTML patterns for headings, paragraphs, links, images, buttons, and form elements.
- Storybook is configured for reviewing implemented primitives.
- Quiz logic is intentionally out of scope for the current foundation.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zod for structured content validation
- Storybook with the accessibility addon
- project-workflow for requirements and task tracking

## Getting Started

Install dependencies:

```sh
npm install
```

Run the app locally:

```sh
npm run dev
```

The app runs at:

```text
http://localhost:3000
```

If another local server is already using port `3000`, Next.js may select another port.

Run Storybook:

```sh
npm run storybook
```

Storybook runs at:

```text
http://localhost:6006
```

## Useful Scripts

```sh
npm run lint
npm run typecheck
npm run content:validate
npm run primitives:validate
npm run build
npm run build-storybook
```

## Routes And Locales

Default English routes:

- `/`
- `/overview`
- `/example`
- `/about`

Italian routes:

- `/it`
- `/it/overview`
- `/it/example`
- `/it/about`

Unsupported locale-like prefixes should render the accessible not-found route.

## Content Model

Structured content lives in:

```text
src/content/pages
src/content/translations
```

The content layer is schema-validated and designed so a future Optimizely CMS adapter can map into the same page and block model.

## Components

Primitive components live in:

```text
src/components/primitives
```

The primitives are intended to keep accessibility, styling, and future CMS rendering behavior consistent across pages and blocks.

## Project Workflow

Requirements and task state live in:

```text
.project-workflow
```

Run the workflow doctor after changing task or tracker files:

```sh
./.project-workflow/cli/workflow doctor
```

## Deployment

The project is intended to deploy on Vercel using the standard Next.js build:

```sh
npm run build
```
