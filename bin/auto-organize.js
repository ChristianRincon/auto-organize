#!/usr/bin/env node
'use strict';

try {
  require('../src/index');
} catch (error) {
  console.error('Error running auto-organize');
  console.error(error.message);
  process.exit(1);
}