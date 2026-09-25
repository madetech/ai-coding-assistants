# Contributing to ai-coding-assistants

Thank you for contributing! We welcome contributions from across the Made Tech community.

## Local Development & Verification

To maintain high documentation quality and avoid broken links or formatting regressions, this repository uses automated Markdown linting and link verification.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ LTS recommended)

### Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run automated verification (linting + link check):

   ```bash
   npm test
   ```

3. Automatically fix formatting issues:

   ```bash
   npm run lint:fix
   ```

## Pull Request Guidelines

1. Create a focused branch for your changes (`git checkout -b feature/your-topic`).
2. Keep pull requests scoped and small so peers can review easily.
3. Ensure `npm test` passes locally before opening a pull request.
