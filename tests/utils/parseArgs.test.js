import { describe, it } from 'node:test';
import assert from 'node:assert';
import { parseArgs } from '../../src/utils/parseArgs.js';

describe('parseArgs', () => {

  describe('default behavior', () => {
    it('should return default configuration when no args are provided', () => {
      const result = parseArgs([]);

      assert.deepStrictEqual(result, {
        preview: false,
        only: null,
        exclude: null,
        help: false
      });
    });
  });

  describe('simple flags', () => {

    it('should enable preview with --preview', () => {
      const result = parseArgs(['--preview']);
      assert.strictEqual(result.preview, true);
    });

    it('should enable preview with -p', () => {
      const result = parseArgs(['-p']);
      assert.strictEqual(result.preview, true);
    });

    it('should enable help with --help', () => {
      const result = parseArgs(['--help']);
      assert.strictEqual(result.help, true);
    });

    it('should enable help with -h', () => {
      const result = parseArgs(['-h']);
      assert.strictEqual(result.help, true);
    });

  });

  describe('"--only" flag', () => {

    it('should parse a single value', () => {
      const result = parseArgs(['--only', 'images']);
      assert.deepStrictEqual(result.only, ['images']);
    });

    it('should parse multiple comma-separated values', () => {
      const result = parseArgs(['--only', 'images,videos']);
      assert.deepStrictEqual(result.only, ['images', 'videos']);
    });

    it('should normalize values to lowercase', () => {
      const result = parseArgs(['--only', 'Images,Videos']);
      assert.deepStrictEqual(result.only, ['images', 'videos']);
    });

    it('should trim spaces around values', () => {
      const result = parseArgs(['--only', ' images , videos ']);
      assert.deepStrictEqual(result.only, ['images', 'videos']);
    });

  });

  describe('"--exclude" flag', () => {

    it('should parse a single value', () => {
      const result = parseArgs(['--exclude', 'documents']);
      assert.deepStrictEqual(result.exclude, ['documents']);
    });

    it('should parse multiple comma-separated values', () => {
      const result = parseArgs(['--exclude', 'documents,images']);
      assert.deepStrictEqual(result.exclude, ['documents', 'images']);
    });

  });

  describe('error handling', () => {

    it('should throw if argument does not start with "-"', () => {
      assert.throws(() => {
        parseArgs(['images']);
      });
    });

    it('should throw for unknown flag', () => {
      assert.throws(
        () => parseArgs(['--random']),
        (error) => error.message.includes('Unknown')
      );
    });

    it('should throw if --only is provided without values', () => {
      assert.throws(() => {
        parseArgs(['--only']);
      });
    });

    it('should throw if --exclude is provided without values', () => {
      assert.throws(() => {
        parseArgs(['--exclude']);
      });
    });

  });

});