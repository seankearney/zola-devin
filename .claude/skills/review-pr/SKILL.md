---
name: review-pr
description: Check out a PR branch, build the project, run checks, perform a code review, and submit feedback to the PR.
allowed-tools: Bash(git *), Bash(gh *), Bash(npm *), Bash(npx *), Bash(zola *), Read, Glob, Grep, Task
argument-hint: <pr-number>
---

# PR Review Workflow

Review pull request **#$ARGUMENTS** by following each step below.

## 1. Gather PR Context

```bash
gh pr view $ARGUMENTS --json title,author,body,baseRefName,headRefName,files,additions,deletions,comments
```

List the changed files:

```bash
gh pr diff $ARGUMENTS --name-only
```

## 2. Checkout the PR Branch

```bash
gh pr checkout $ARGUMENTS
```

Verify:

```bash
git branch --show-current
```

## 3. Build & Validate

Install dependencies and compile Tailwind CSS:

```bash
npm install
npx tailwindcss -i ./static/input.css -o ./static/tailwind.css
```

Run Zola's built-in link and config checker:

```bash
zola check
```

Attempt a full site build to catch template errors:

```bash
zola build
```

Record whether each step passed or failed — include these results in the final review.

## 4. Code Review

Read the full diff:

```bash
gh pr diff $ARGUMENTS
```

Then read each changed file in full to understand surrounding context.

Evaluate the changes against the project's **review checklist** (see `review-checklist.md` in this skill directory). Pay special attention to:

- **Correctness** — Does the change do what it claims? Are there logic errors?
- **Security** — Any XSS, injection, or unsanitized input concerns?
- **Architecture** — Does it follow the project structure (Tera templates, colocated content, Tailwind component classes)?
- **Dark mode** — If UI changed, are both themes handled with `dark:` variants?
- **Performance** — Does it add render-blocking resources or expensive operations?
- **Duplication** — Does it copy-paste markup that should be extracted into a macro/partial?

For each issue found, note the file, line, and severity (critical / suggestion / nit).

## 5. Submit Review

Based on your analysis, pick one of:
- **APPROVE** — No blocking issues, good to merge.
- **REQUEST_CHANGES** — Has critical issues that must be fixed.
- **COMMENT** — Non-blocking observations or questions.

Submit the review:

```bash
gh pr review $ARGUMENTS --<approve|request-changes|comment> --body "$(cat <<'EOF'
## Code Review — PR #$ARGUMENTS

### Build Results
- npm install: ✓/✗
- Tailwind compile: ✓/✗
- zola check: ✓/✗
- zola build: ✓/✗

### Summary
[1-2 sentence overall assessment]

### Findings
| # | File | Line | Severity | Description |
|---|------|------|----------|-------------|
| 1 | ... | ... | critical/suggestion/nit | ... |

### What Looks Good
- [positive observations]

🤖 Reviewed with [Claude Code](https://claude.ai/code)
EOF
)"
```

## 6. Return to Main Branch

```bash
git checkout main
```

Report a summary of the review back to the user.
