import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validateFlags, validateTypes, validateFlagsAndTypes } from '../../src/utils/validators.js';

describe('validators', () => {

  describe('validateFlags', () => {

    it('should throw if cliFlags is missing', () => {
      assert.throws(() => {
        validateFlags();
      });
    });

    it('should throw if cliFlags is not an object', () => {
      assert.throws(() => {
        validateFlags('invalid');
      });
    });

    it('should not throw if cliFlags is a valid object', () => {
      assert.doesNotThrow(() => {
        validateFlags({ preview: true });
      });
    });

  });

  describe('validateTypes', () => {

    it('should throw if availableTypes is missing', () => {
      assert.throws(() => {
        validateTypes();
      });
    });

    it('should throw if availableTypes is not an array', () => {
      assert.throws(() => {
        validateTypes('invalid');
      });
    });

    it('should throw if availableTypes is empty', () => {
      assert.throws(() => {
        validateTypes([]);
      });
    });

    it('should not throw if availableTypes is a valid non-empty array', () => {
      assert.doesNotThrow(() => {
        validateTypes(['images', 'videos']);
      });
    });

  });

  describe('validateFlagsAndTypes', () => {

    const availableTypes = ['images', 'videos', 'documents'];

    it('should not throw if only types are valid', () => {
      assert.doesNotThrow(() => {
        validateFlagsAndTypes({ only: ['images'] }, availableTypes);
      });
    });

    it('should not throw if exclude types are valid', () => {
      assert.doesNotThrow(() => {
        validateFlagsAndTypes({ exclude: ['videos'] }, availableTypes);
      });
    });

    it('should throw if only contains invalid type', () => {
      assert.throws(() => {
          validateFlagsAndTypes({ only: ['invalidType'] }, availableTypes);
        },
        (error) => error.message.includes('is not a valid type')
      );
    });

    it('should throw if exclude contains invalid type', () => {
      assert.throws(
        () => {
          validateFlagsAndTypes({ exclude: ['invalidType'] }, availableTypes);
        },
        (error) => error.message.includes('is not a valid type')
      );
    });

  });

});