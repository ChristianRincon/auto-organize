import { describe, it } from 'node:test';
import assert from 'node:assert';
import { shouldSkipFile } from '../../src/utils/filesFilters.js';

describe('shouldSkipFile', () => {

  describe('without flags', () => {
    it('should not skip when no flags are provided', () => {
      assert.strictEqual(shouldSkipFile('Images', {}), false);
    });
  });

  describe('"only" flag behavior', () => {
    it('should not skip when folder is included in "only" list', () => {
      assert.strictEqual(shouldSkipFile('Images', { only: ['images'] }), false);
    });

    it('should skip when folder is not included in "only" list', () => {
      assert.strictEqual(shouldSkipFile('Videos', { only: ['images'] }), true);
    });

    it('should be case insensitive (folder is normalized)', () => {
      assert.strictEqual(shouldSkipFile('IMAGES', { only: ['images'] }), false);
    });
  });

  describe('"exclude" flag behavior', () => {
    it('should skip when folder is in "exclude" list', () => {
      assert.strictEqual(shouldSkipFile('Images', { exclude: ['images'] }), true);
    });

    it('should not skip when folder is not in "exclude" list', () => {
      assert.strictEqual(shouldSkipFile('Videos', { exclude: ['images'] }), false);
    });

    it('should be case insensitive (folder is normalized)', () => {
      assert.strictEqual(shouldSkipFile('IMAGES', { exclude: ['images'] }), true);
    });
  });

  describe('interaction between "only" and "exclude"', () => {
    it('should skip when folder is allowed by "only" but blocked by "exclude" ("exclude" takes priority)', () => {
      assert.strictEqual(shouldSkipFile('Images', { only: ['images'], exclude: ['images'] }), true);
    });

    it('should skip when folder is not in "only" even if not excluded', () => {
      assert.strictEqual(shouldSkipFile('Videos', { only: ['images'], exclude: ['documents'] }), true);
    });
  });

});