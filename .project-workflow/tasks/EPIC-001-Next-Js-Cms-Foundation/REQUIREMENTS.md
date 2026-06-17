# Requirements

## Summary

- Task: EPIC-001
- Title: Next.js CMS Foundation
- Last updated: 2026-06-17

## Goal

Define and implement the foundation for a Next.js website that can later be backed by Optimizely CMS while working today from structured project files. The foundation must use TypeScript, Tailwind, static generation by default, Vercel-compatible deployment, locale-aware routing, accessible HTML primitive components, reusable block components, and a client-side WYSIWYG editing surface.

## Non-Goals

- Integrating with Optimizely CMS in this phase.
- Adding a database, backend API, or server-side persistence for core page content.
- Translating URL slugs; route names remain shared across locales.

## Users & Context

- Site visitors need accessible, localized pages that work without client-only rendering as the default.
- Content editors and developers need a block-based content structure that resembles CMS-managed pages while remaining file-backed for now.
- Future implementers need clean boundaries so Optimizely CMS can replace or feed the structured content layer later.
- The deployment target is Vercel.

## Requirements (Outcome-Focused)

- Use Next.js with the App Router, TypeScript, Tailwind, and static generation as the default rendering model.
- Support English and Italian locales, with English as the default unprefixed locale and Italian prefixed under `/it`.
- Keep slugs shared across locales; do not translate route segment names.
- Store page content and translations in structured project files, with graceful behavior when localized strings are missing.
- Build accessible wrapper components for the v1 primitive inventory: headings, paragraphs, links, images, buttons, and form elements.
- Build a starter set of block components suitable for a CMS-style page model.
- Expose every v1 primitive component and every block component in Storybook for visual review, accessibility review, and implementation handoff.
- Provide a WYSIWYG editor component suitable for authoring rich text content in the browser.
- Use a basic healthcare-oriented visual design inspired by healthdirect.gov.au: calm, practical, high-contrast, utility-first, and focused on clear entry points rather than decorative marketing treatment.
- Treat WCAG 2.2 AA and EN 301 549 accessibility expectations as hard component requirements.

## Acceptance Criteria (Verifiable)

- AC1: The project plan includes a Next.js TypeScript Tailwind foundation that is static-generation-first and ready for Vercel deployment.
- AC2: The routing plan supports unprefixed English routes, `/it`-prefixed Italian routes, and shared non-translated slugs.
- AC3: The content plan stores pages and translations in structured files and defines graceful fallback behavior for missing localized strings.
- AC4: The component plan includes accessible wrappers for the v1 primitive inventory: headings, paragraphs, links, images, buttons, and form elements.
- AC5: The component plan includes a browser-side WYSIWYG editor for rich text authoring without relying on a backend.
- AC6: The block architecture plan includes basic CMS-style blocks and a typed block renderer that can later map to Optimizely CMS block models.
- AC7: The implementation plan includes accessibility validation for WCAG 2.2 AA and EN 301 549-aligned behavior across primitive components and blocks.
- AC8: The design plan defines a basic healthcare-oriented interface direction inspired by healthdirect.gov.au without copying its brand or proprietary assets.
- AC9: Storybook includes visible stories for every v1 primitive component and every block component.

## Open Questions (Answer Needed)

- None.

## Decisions (Resolved)

- Default locale: English.
- Non-default locale: Italian.
- Locale prefixing: only non-default languages are prefixed; English routes stay unprefixed.
- Slugs: shared across locales and not translated.
- i18n approach: lightweight custom locale utilities and structured JSON files; do not add an i18n library unless future requirements justify it.
- Rendering: static generation by default.
- Content source: structured files in the project; no database or CMS required for core functionality in this phase.
- Content format: JSON files validated by a schema library, with TypeScript types inferred or generated from the schemas where practical.
- Translation fallback: per-field fallback rules in the content schema; required user-facing strings fail validation/build when missing, while optional fields may fall back to English or be safely omitted.
- Deployment target: Vercel.
- Component scope: v1 primitive wrappers for headings, paragraphs, links, images, buttons, and form elements, plus basic block components.
- WYSIWYG scope: local/dev-only authoring demo for v1; do not expose it as a public production route.
- WYSIWYG implementation: Tiptap with JSON output compatible with the structured rich text/block content model.
- V1 block inventory: rich text, hero, image, call to action, and section container.
- Design direction: basic healthcare interface inspired by healthdirect.gov.au, using clear navigation, calm colors, visible service/action areas, readable typography, strong contrast, and accessible form states.
- Storybook scope: every primitive, block, and the local/dev WYSIWYG editor must have visible stories, with relevant states and accessibility considerations represented.
- Unsupported locale behavior: invalid locale-like route prefixes should render an accessible 404/not-found experience rather than redirecting or silently falling back.

## Validation Plan

- Run project-workflow doctor after requirements and task updates.
- Before implementation, run epic readiness checks and confirm all parent ACs are mapped to child tasks.
- During implementation, validate TypeScript, linting, production build, route generation, and accessibility-focused component behavior.
- Verify Storybook runs and contains stories for every primitive and block before component tasks are considered complete.
- For visual/UI implementation, verify desktop and mobile rendering before handoff.
