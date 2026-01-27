#!/usr/bin/env node

try {
  await import('../src/index.js');
} catch (error) {
  console.error('Error running auto-organize');
  console.error(error.message);
  process.exit(1);
}
