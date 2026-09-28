#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

function findMarkdownFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        results = results.concat(findMarkdownFiles(fullPath));
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }

  return results;
}

const rootDir = path.resolve(__dirname, '..');
const files = findMarkdownFiles(rootDir);
const binaryPath = path.resolve(rootDir, 'node_modules/.bin/markdown-link-check');

console.log(`Checking hyperlinks across ${files.length} Markdown files...\n`);

let hasErrors = false;

for (const file of files) {
  const relPath = path.relative(rootDir, file);
  try {
    execFileSync(binaryPath, ['-q', file], {
      cwd: path.dirname(file),
      stdio: 'inherit'
    });
  } catch (err) {
    console.error(`✖ Link validation failed in ${relPath}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('\nLink validation finished with errors.');
  process.exit(1);
} else {
  console.log('\n✔ All hyperlinks verified successfully.');
}
