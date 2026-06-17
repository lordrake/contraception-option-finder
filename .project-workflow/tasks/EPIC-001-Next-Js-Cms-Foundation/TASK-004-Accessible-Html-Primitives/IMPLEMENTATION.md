## User Story

As a developer, I want accessible wrappers for the agreed v1 primitive inventory, so that page and block development starts from consistent semantic components.

## Parent AC Coverage

- AC4: Accessible wrappers for headings, paragraphs, links, images, buttons, and form elements.

## Parent AC Evidence

- AC4: Primitive wrappers now exist under `src/components/primitives` for headings, paragraphs, links, images, buttons, labels, help text, error text, fieldsets, legends, text inputs, textareas, selects, checkboxes, and radio groups. Components preserve native elements, expose typed native props, include Tailwind-friendly `className` extension points, and support focus, disabled, invalid, accessible-name, and described-by behavior where applicable. A localized overview page at `/overview` and `/it/overview` uses the new primitives in app markup and is linked from the homepage route navigation. Standard localized pages and the not-found page now use the heading, paragraph, and link primitives for content elements while retaining native landmarks. Story-ready `.stories.tsx` files are colocated with the primitives; Storybook runtime visibility remains owned by TASK-009.

## Acceptance Criteria

- [x] AC1: Primitive components exist for headings, paragraphs, links, images, buttons, and form elements, and preserve semantic accessibility by default.

## Validation

- AC1: `npm run primitives:validate`, `npm run lint`, `npm run typecheck`, `npm run content:validate`, and `npm run build` passed. The primitive validator checks heading, paragraph, link, button, label/control association, described-by wiring, invalid state, checkbox, fieldset, legend, and radio markup. Production build lists `/overview` and `/it/overview` as SSG routes, and localhost HEAD checks confirmed `/`, `/about`, and `/overview` return `200` while `/fr` returns `404`.

## Task List

| ID | Title | Description | Acceptance Criteria | User Verification | Status |
| --: | ----- | ----------- | ------------------- | ----------------- | ------ |
| 1 | Define primitive inventory | Lock v1 inventory to headings, paragraphs, links, images, buttons, and form elements. | AC1 | Review exported component list. | Complete |
| 2 | Implement content primitives | Add heading, paragraph, link, image, and button wrappers. | AC1 | Review component examples. | Complete |
| 3 | Implement form primitives | Add label, input, textarea, select, checkbox, radio group, fieldset, legend, error, and help text wrappers. | AC1 | Keyboard-test form examples. | Complete |
| 4 | Add accessibility states | Ensure visible focus, disabled, invalid, and described-by behavior. | AC1 | Inspect examples with assistive markup. | Complete |
| 5 | Add Storybook stories | Add stories for each primitive and relevant component states. | AC1 | Review primitives in Storybook. | Complete |

## QA & Code Review

- Date: 2026-06-17
- Reviewed areas: primitive wrapper APIs, native semantic preservation, label/control associations, described-by and invalid states, external link safety, image alt handling, overview page primitive usage, localized page primitive adoption, not-found primitive adoption, colocated stories, validation script, and static route output.
- Validation evidence: `npm run primitives:validate`, `npm run lint`, `npm run typecheck`, `npm run content:validate`, and `npm run build` passed. Localhost HEAD checks confirmed `/overview` and `/it/overview` return `200`, while `/fr` returns `404`. Production build lists `/overview` and `/it/overview` as SSG routes.
- AC coverage: AC1 is covered by typed wrappers for headings, paragraphs, links, images, buttons, and form elements; native semantics and keyboard behavior are preserved; labelled and described form controls validate through `primitives:validate`; existing app pages use the content primitives.
- Findings: Review found and fixed two non-blocking hardening issues: checkbox IDs are now required so labels remain programmatically associated, and external links now default to `rel="noopener noreferrer"`.
- Verdict: Pass.

## Retro

- Reusable lessons: Pending QA review.
- Conventions or agent assets updated: Pending QA review.
- Follow-up tasks: TASK-009 should install/configure Storybook and verify the colocated primitive stories are visible.

## Notes

- Task: TASK-004
- Title: Accessible HTML primitive components
- Created: 2026-06-17
