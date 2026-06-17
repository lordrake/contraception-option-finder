# Requirements

## Summary

- Task: TASK-002
- Title: Locale routing for English and Italian
- Parent AC Coverage: AC2
- Last updated: 2026-06-17

## Goal

Plan locale-aware routing where English is the default unprefixed locale and Italian uses the `/it` prefix, while route slugs remain shared across locales.

## Non-Goals

- Do not translate slugs.
- Do not add runtime CMS routing.

## Users & Context

Visitors should reach English content at unprefixed URLs and Italian content at prefixed URLs without route duplication surprises.

## Requirements (Outcome-Focused)

- English routes are unprefixed, such as `/` and `/about`.
- Italian routes are prefixed, such as `/it` and `/it/about`.
- Slug names stay identical across locales.
- Unsupported locale handling must be explicit and accessible.
- Invalid locale-like route prefixes must render an accessible 404/not-found experience rather than redirecting or silently falling back.
- Locale switching must preserve the current slug where possible.
- Locale behavior must be implemented with lightweight custom locale utilities and structured files rather than an i18n library for v1.

## Acceptance Criteria (Verifiable)

- AC1: Covers parent AC(s) AC2: The routing plan defines unprefixed English routes, `/it` Italian routes, and shared slug behavior.

## Open Questions (Answer Needed)

- None blocking; exact route list can be defined during content implementation.

## Decisions (Resolved)

- English is the default locale.
- Italian is the only non-default locale for this phase.
- Only non-default locales are URL-prefixed.
- Use custom locale utilities for v1 instead of `next-intl` or another i18n library.
- Invalid locale-like prefixes should 404 with an accessible not-found page.

## Validation Plan

- Verify generated static params include all supported locale/page combinations.
- Verify locale links and missing route behavior during implementation.
