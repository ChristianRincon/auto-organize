import test from 'node:test';
import assert from 'node:assert';
import { getFolderNameByExtensionType } from '../../src/rules/byType.js';

test('should return Images for .png extension', () => {
  const result = getFolderNameByExtensionType('.png');
  assert.strictEqual(result, 'Images');
});

test('should return null for unknown extension', () => {
  const result = getFolderNameByExtensionType('.unknownextension');
  assert.strictEqual(result, null);
});