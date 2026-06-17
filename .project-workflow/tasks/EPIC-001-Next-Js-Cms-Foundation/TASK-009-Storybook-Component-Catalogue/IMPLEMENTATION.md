## User Story

As a reviewer, I want every primitive, block, and local/dev WYSIWYG editor visible in Storybook, so that I can inspect the component system without navigating full site pages.

## Parent AC Coverage

- AC9: Storybook includes visible stories for every v1 primitive component, every block component, and the local/dev WYSIWYG editor.

## Acceptance Criteria

- [ ] AC1: Storybook is configured and includes visible stories for all primitives, starter blocks, and the local/dev WYSIWYG editor.

Partial progress:

- Storybook is configured for the Next.js, TypeScript, and Tailwind stack.
- All currently implemented primitives have visible stories.
- Starter block and WYSIWYG editor stories remain pending until TASK-006 and TASK-005 implement those components.

## Validation

- AC1: Run Storybook and confirm every primitive, block, and WYSIWYG story appears with representative states.

Current evidence:

- `./.project-workflow/cli/workflow epic ready-child --epic-id EPIC-001 --id TASK-009` passed.
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run primitives:validate` passed with escalated permissions because `tsx` needs to create a local IPC pipe.
- `npm run content:validate` passed with escalated permissions because `tsx` needs to create a local IPC pipe.
- `npm run build` passed and preserved static generation for `/`, `/overview`, `/example`, `/about`, `/it`, `/it/overview`, `/it/example`, and `/it/about`.
- `npm run build-storybook` passed with Storybook 10.4.6.
- `curl -I -s http://localhost:6006/` returned `200 OK`.
- Storybook manifests list primitive stories for button variants, form text controls, form invalid state, form choice controls, informative/decorative images, link variants, headings, body copy, and localized content.
- `./.project-workflow/cli/workflow task ready --id TASK-009` is not applicable to this nested epic child task because the root tracker only contains the parent epic row.
- `npm audit` reports a moderate PostCSS advisory through Next/Storybook dependencies. No automatic fix was applied because npm's forced fix would install an incompatible Next.js version.

## Task List

| ID | Title | Description | Acceptance Criteria | User Verification | Status |
| --: | ----- | ----------- | ------------------- | ----------------- | ------ |
| 1 | Configure Storybook | Add Storybook support for Next.js, TypeScript, and Tailwind. | AC1 | Run Storybook locally. | Done |
| 2 | Add primitive stories | Add stories for headings, paragraphs, links, images, buttons, and form elements. | AC1 | Review primitive stories. | Done |
| 3 | Add block stories | Add stories for every starter block using representative structured content. | AC1 | Review block stories. | Blocked by TASK-006 |
| 4 | Add WYSIWYG stories | Add stories for the local/dev Tiptap editor, toolbar states, and JSON output examples. | AC1 | Review editor stories. | Blocked by TASK-005 |
| 5 | Cover key states | Include relevant disabled, invalid, help/error, external link, localized, editor, and content variation states. | AC1 | Inspect state stories. | In Progress |

## QA & Code Review

- Verdict: Pending implementation.
- Evidence: Pending implementation.
- Findings: Pending implementation.

## Retro

- Reusable lessons: Pending implementation.
- Conventions or agent assets updated: Pending implementation.
- Follow-up tasks: Pending implementation.

## Notes

- Task: TASK-009
- Title: Storybook component catalogue
- Created: 2026-06-17
