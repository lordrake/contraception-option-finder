## User Story

As a visitor, I want language-specific routes that follow predictable URL rules, so that I can navigate English and Italian content reliably.

## Parent AC Coverage

- AC2: Unprefixed English routes, `/it`-prefixed Italian routes, and shared non-translated slugs.

## Parent AC Evidence

- AC2: Custom locale utilities define English as the default unprefixed locale and Italian as the only prefixed locale. Routes `/`, `/example`, `/about`, `/it`, `/it/example`, and `/it/about` return `200`; invalid locale-like routes `/fr` and `/en/example` return `404`. Production build lists `/example`, `/about`, `/it/example`, and `/it/about` as SSG routes generated from static params.

## Acceptance Criteria

- [x] AC1: English pages resolve without a locale prefix and Italian pages resolve under `/it` using the same slugs.

## Validation

- AC1: `npm run lint`, `npm run typecheck`, and `npm run build` passed. HEAD requests confirmed `/`, `/example`, `/about`, `/it`, `/it/example`, and `/it/about` return `200`; `/fr` and `/en/example` return `404`.

## Task List

| ID | Title | Description | Acceptance Criteria | User Verification | Status |
| --: | ----- | ----------- | ------------------- | ----------------- | ------ |
| 1 | Define locale config | Add a typed locale configuration for `en` and `it`. | AC1 | Review locale constants. | Complete |
| 2 | Implement route mapping | Support default unprefixed English and prefixed Italian paths with custom locale utilities. | AC1 | Visit representative routes. | Complete |
| 3 | Add locale navigation | Provide accessible locale switching that preserves shared slugs. | AC1 | Use language switch links. | Complete |
| 4 | Handle invalid locales | Render accessible 404/not-found output for unsupported locale-like prefixes. | AC1 | Visit invalid locale-like route. | Complete |

## QA & Code Review

- Date: 2026-06-17
- Reviewed areas: locale constants, route matching helpers, static params, English unprefixed routes, Italian `/it` routes, shared slug preservation, locale switch links, unsupported locale-like 404 behavior, not-found source, and static generation output.
- Validation evidence: `npm run content:validate`, `npm run lint`, `npm run typecheck`, and `npm run build` passed. Production build lists `/`, `/example`, `/about`, `/it`, `/it/example`, and `/it/about` as static or SSG routes. Localhost HEAD checks confirmed `/`, `/example`, `/about`, `/it`, `/it/example`, and `/it/about` return `200`; `/fr` and `/en/example` return `404`.
- AC coverage: AC1 is covered by the custom locale utilities, default-locale unprefixed routing, Italian prefixed routing, shared slug static params, locale switch URL generation, and unsupported locale-like route rejection.
- Findings: None blocking.
- Follow-ups: Root layout still renders `<html lang="en">` for all routes while Italian pages mark the localized content region with `lang="it"` on `<main>`. Revisit document-level locale metadata when locale-specific layouts or metadata are introduced.
- Verdict: Pass with follow-ups.

## Retro

- Reusable lessons: Static locale routing can stay simple with custom utilities while content remains file-backed.
- Conventions or agent assets updated: None.
- Follow-up tasks: TASK-003 should replace placeholder route copy with schema-validated JSON content.

## Notes

- Task: TASK-002
- Title: Locale routing for English and Italian
- Created: 2026-06-17
