## User Story

As a content maintainer, I want schema-validated JSON content files, so that pages can be generated statically now and migrated toward CMS-backed content later.

## Parent AC Coverage

- AC3: File-backed pages and translations with graceful missing localized string behavior.

## Parent AC Evidence

- AC3: Page records now live in `src/content/pages/*.json`, UI translation dictionaries live in `src/content/translations/*.json`, and Zod schemas validate page, block, localized string, and translation dictionary shapes before rendering. Required localized strings fail validation when a supported locale is missing, while optional localized strings support either English fallback or omission through the content loader. The app renders English and Italian pages from the structured content files while preserving static generation.

## Acceptance Criteria

- [x] AC1: Page content and translations are loaded from schema-validated JSON files with typed locale support and per-field fallback behavior.

## Validation

- AC1: `npm run content:validate`, `npm run lint`, `npm run typecheck`, and `npm run build` passed. `content:validate` checks schema-loaded pages/dictionaries, required localized string failure when Italian is missing, optional English fallback, and optional omission behavior. Localhost smoke checks confirmed `/example` and `/it/example` return `200` and render the new file-backed localized content.

## Task List

| ID | Title | Description | Acceptance Criteria | User Verification | Status |
| --: | ----- | ----------- | ------------------- | ----------------- | ------ |
| 1 | Define content schema | Create schema-validated JSON page, block, and translation shapes with TypeScript types. | AC1 | Review schemas and type definitions. | Complete |
| 2 | Add sample content | Provide English and Italian sample content for route verification. | AC1 | Review rendered pages. | Complete |
| 3 | Implement fallback policy | Apply per-field fallback rules for required and optional localized strings. | AC1 | Test required failure and optional fallback scenarios. | Complete |

## QA & Code Review

- Date: 2026-06-17
- Reviewed areas: JSON page records, JSON translation dictionaries, Zod schemas, content and translation loaders, localized page rendering, fallback validation script, static route generation, workflow evidence.
- Validation evidence: `npm run content:validate`, `npm run lint`, `npm run typecheck`, and `npm run build` passed. Localhost checks confirmed `/example` and `/it/example` return `200` and render the structured English and Italian content.
- AC coverage: AC1 is covered by schema-validated page and translation JSON, typed locale-aware loaders, required localized field validation failures, optional English fallback, optional omission behavior, and static-generation-compatible imports.
- Findings: None.
- Verdict: Pass.

## Retro

- Reusable lessons: Keep locale-aware content loading separate from routing so static route generation stays predictable while the content source can later move behind a CMS adapter.
- Conventions or agent assets updated: None.
- Follow-up tasks: TASK-006 should consume the validated block records through a typed block renderer instead of introducing a second block data shape.

## Notes

- Task: TASK-003
- Title: Structured content and translation files
- Created: 2026-06-17
