# Requirements

## Summary

- Task: TASK-006
- Title: CMS-style block architecture
- Parent AC Coverage: AC6
- Last updated: 2026-06-17

## Goal

Plan a typed block-based page architecture that works from structured files today and can later map to Optimizely CMS page and block models.

## Non-Goals

- Do not integrate Optimizely CMS APIs in this task.
- Do not create a database-backed block store.

## Users & Context

Developers need reusable blocks and a renderer so pages can be assembled from structured content rather than hard-coded layouts.

## Requirements (Outcome-Focused)

- Define typed block records with stable identifiers and content type names.
- Block records must be loaded from schema-validated JSON content.
- Provide a typed block renderer with safe fallback behavior for unknown block types.
- Include the v1 starter block set: rich text, hero, image, call to action, and section container.
- Blocks must compose the primitive components and inherit their accessibility behavior.
- Every block component must have a Storybook story using representative structured content.
- Content shapes should remain compatible with future Optimizely mapping.

## Acceptance Criteria (Verifiable)

- AC1: Covers parent AC(s) AC6: The block plan defines basic CMS-style blocks and a typed renderer suitable for future Optimizely mapping.

## Open Questions (Answer Needed)

- None.

## Decisions (Resolved)

- V1 block inventory is fixed to rich text, hero, image, call to action, and section container.

## Validation Plan

- Verify sample pages and Storybook render each block type during implementation.
- Verify unknown block behavior is safe and developer-visible.
