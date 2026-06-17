# Project Workflow Guidance

Use this file for repo-specific workflow guidance that should survive project-workflow init refreshes.

Add local conventions, validation commands, safety constraints, handoff rules, and agent notes here.

## Content Conventions

- Keep route resolution separate from content loading. File-backed content should be schema-validated through `src/lib/content` and remain compatible with static generation until a future CMS adapter replaces or feeds the same content shape.
