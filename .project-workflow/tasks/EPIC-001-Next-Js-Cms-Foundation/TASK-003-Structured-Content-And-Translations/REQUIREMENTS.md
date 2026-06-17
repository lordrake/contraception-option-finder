# Requirements

## Summary

- Task: TASK-003
- Title: Structured content and translation files
- Parent AC Coverage: AC3
- Last updated: 2026-06-17

## Goal

Plan file-backed page content and translations that can serve the site now and map cleanly to Optimizely CMS content later.

## Non-Goals

- Do not add a database.
- Do not fetch core page content from a backend.

## Users & Context

Content authors and developers need structured files for pages, translations, and blocks that are strongly typed and resilient to missing locale strings.

## Requirements (Outcome-Focused)

- Page content must be represented as JSON files in the project.
- Translation dictionaries must support English and Italian.
- JSON content and translation files must be validated by a schema library before use.
- Translation loading must use the project's custom locale utilities and structured JSON files for v1.
- Missing localized strings must follow per-field fallback rules in the content schema.
- Required user-facing strings must fail validation/build when missing.
- Optional localized fields may fall back to English or be safely omitted when the schema allows it.
- Content records should include stable identifiers and content type names suitable for a later Optimizely mapping.
- The content loader must preserve static generation compatibility.

## Acceptance Criteria (Verifiable)

- AC1: Covers parent AC(s) AC3: The content plan defines structured page files, translation dictionaries, and missing-string fallback behavior.

## Open Questions (Answer Needed)

- None.

## Decisions (Resolved)

- Core content is file-backed for now.
- Content format is JSON validated by a schema library.
- i18n/content loading uses lightweight custom locale utilities for v1.
- Missing translation behavior uses per-field fallback rules: required strings fail validation/build, optional fields can fall back to English or be omitted when allowed.
- CMS integration is deferred, but content shapes should remain CMS-friendly.

## Validation Plan

- Verify schema-validated content loading, required-string failures, and optional fallback/omission behavior during implementation.
- Include representative English and Italian content samples.
