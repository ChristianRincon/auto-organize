![Auto Organize CLI Banner](../assets/banner.png)

# Testing Strategy

This project currently uses Node.js native test runner (`node:test`) for unit testing.

The goal of the test suite is to validate core logic while keeping tests deterministic, maintainable, and focused.

<br>

## Philosophy

- The test suite prioritizes **pure unit testing** for business logic.
- Unnecessary testing of trivial wrappers around native APIs is avoided.
- Tests are designed to be simple, explicit, and readable.
- Each test remains small, isolated, and focused on a single responsibility.
- Infrastructure-heavy logic (e.g. filesystem interaction) is tested only when meaningful.

<br>

## Covered Modules

The following modules currently have unit test coverage:

- `src/rules/byType`
- `src/utils/filesFilters`
- `src/utils/parseArgs`
- `src/utils/validators`

<br>

These tests focus on:

- Input validation
- Edge cases
- Error handling
- Logical correctness
- CLI flag parsing behavior

<br>

## Not Covered (By Design)

The following modules are intentionally not deeply unit tested:

- `fsHelpers` — thin wrappers over Node’s `fs` API.
- CLI rendering functions (e.g. console output formatting).

<br>

These modules primarily delegate to native APIs and contain minimal internal logic.

<br>

## Running Tests

Run the entire test suite:

```bash
npm test
```

<br>

Or with pnpm:

```bash
pnpm test
```

<br>

## Running a Specific Test File

Individual test files can be executed:

> Examples

<br>

```bash
npm test tests/utils/parseArgs.test.js
```

or

```bash
pnpm test tests/utils/parseArgs.test.js
```
<br>

