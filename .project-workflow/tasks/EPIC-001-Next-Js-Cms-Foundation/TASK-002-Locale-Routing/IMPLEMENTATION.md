## User Story

As a visitor, I want language-specific routes that follow predictable URL rules, so that I can navigate English and Italian content reliably.

## Parent AC Coverage

- AC2: Unprefixed English routes, `/it`-prefixed Italian routes, and shared non-translated slugs.

## Acceptance Criteria

- [ ] AC1: English pages resolve without a locale prefix and Italian pages resolve under `/it` using the same slugs.

## Validation

- AC1: Build and inspect representative routes for `/`, `/example`, `/it`, and `/it/example` once pages exist.

## Task List

| ID | Title | Description | Acceptance Criteria | User Verification | Status |
| --: | ----- | ----------- | ------------------- | ----------------- | ------ |
| 1 | Define locale config | Add a typed locale configuration for `en` and `it`. | AC1 | Review locale constants. | To Do |
| 2 | Implement route mapping | Support default unprefixed English and prefixed Italian paths with custom locale utilities. | AC1 | Visit representative routes. | To Do |
| 3 | Add locale navigation | Provide accessible locale switching that preserves shared slugs. | AC1 | Use language switch links. | To Do |
| 4 | Handle invalid locales | Render accessible 404/not-found output for unsupported locale-like prefixes. | AC1 | Visit invalid locale-like route. | To Do |

## QA & Code Review

- Verdict: Pending implementation.
- Evidence: Pending implementation.
- Findings: Pending implementation.

## Retro

- Reusable lessons: Pending implementation.
- Conventions or agent assets updated: Pending implementation.
- Follow-up tasks: Pending implementation.

## Notes

- Task: TASK-002
- Title: Locale routing for English and Italian
- Created: 2026-06-17
