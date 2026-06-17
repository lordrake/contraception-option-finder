# Requirements

## Summary

- Task: TASK-009
- Title: Storybook component catalogue
- Parent AC Coverage: AC9
- Last updated: 2026-06-17

## Goal

Plan Storybook coverage so every v1 primitive component, block component, and the local/dev WYSIWYG editor is visible, reviewable, and easy to validate outside full page rendering.

## Non-Goals

- Do not use Storybook as a replacement for production route validation.
- Do not create final design-system documentation beyond the foundation catalogue.

## Users & Context

Developers, reviewers, and stakeholders need a single place to inspect components, states, content variations, and accessibility behavior while the CMS-style foundation evolves.

## Requirements (Outcome-Focused)

- Configure Storybook for the Next.js, TypeScript, and Tailwind stack.
- Add stories for every v1 primitive: headings, paragraphs, links, images, buttons, and form elements.
- Add stories for every starter block: rich text, hero, image, call to action, and section container.
- Add stories for the local/dev Tiptap WYSIWYG editor, including toolbar and JSON output states.
- Include relevant component states such as default, focus-visible where practical, disabled, invalid, error/help text, external link, missing image alt validation behavior, and localized content examples.
- Keep Storybook examples aligned with the schema-validated JSON content and block model.

## Acceptance Criteria (Verifiable)

- AC1: Covers parent AC(s) AC9: Storybook includes visible stories for every v1 primitive component, every block component, and the local/dev WYSIWYG editor.

## Open Questions (Answer Needed)

- None.

## Decisions (Resolved)

- Storybook is required for primitives, blocks, and the local/dev WYSIWYG editor.

## Validation Plan

- Run Storybook locally during implementation and verify all primitive, block, and WYSIWYG stories are visible.
- Include Storybook in validation commands where practical.
- Review representative accessibility states in Storybook before component tasks move to complete.
