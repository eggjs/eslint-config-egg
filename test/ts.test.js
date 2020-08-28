'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/ts.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/ts-app');

  describe('normal', () => {
    it('should works without error with typescript-eslint', () => {
      return coffee.spawn('eslint', [ 'correct.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should throw with not correct lint', () => {
      return coffee.spawn('eslint', [ 'not-correct.ts' ], { cwd })
        // .debug()
        .expect('stdout', /semi/)
        .expect('stdout', /eol-last/)
        .expect('code', 1)
        .end();
    });
  });

  describe('trailing comma', () => {
    it('should success with trailing comma', () => {
      return coffee.spawn('eslint', [ './comma/trailing-comma.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail when it missing trailing comma in object or has unnecessary trailing comma in paramter', () => {
      return coffee.spawn('eslint', [ './comma/trailing-comma-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /Missing trailing comma/)
        .expect('code', 1)
        .end();
    });
  });

  describe('semicolon', () => {
    it('should success with semicolon', () => {
      return coffee.spawn('eslint', [ './semi/semi.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail without semicolon', () => {
      return coffee.spawn('eslint', [ './semi/semi-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /Missing semicolon/)
        .expect('code', 1)
        .end();
    });
  });

  describe('curly', () => {
    it('should success with same line or braces', () => {
      return coffee.spawn('eslint', [ './curly/curly.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail with other line', () => {
      return coffee.spawn('eslint', [ './curly/curly-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /curly/)
        .expect('code', 1)
        .end();
    });
  });

  describe('align', () => {
    it('should success with arguments', () => {
      return coffee.spawn('eslint', [ './align/arguments.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should success with elements', () => {
      return coffee.spawn('eslint', [ './align/elements.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail with elements', () => {
      return coffee.spawn('eslint', [ './align/elements-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /indent/)
        .expect('code', 1)
        .end();
    });

    it('should success with members', () => {
      return coffee.spawn('eslint', [ './align/members.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail with members', () => {
      return coffee.spawn('eslint', [ './align/members-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /indent/)
        .expect('code', 1)
        .end();
    });

    it('should success with parameters', () => {
      return coffee.spawn('eslint', [ './align/parameters.ts' ], { cwd })
        .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail with parameters', () => {
      return coffee.spawn('eslint', [ './align/parameters-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /indent/)
        .expect('code', 1)
        .end();
    });

    it('should success with statements', () => {
      return coffee.spawn('eslint', [ './align/statements.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail with statements', () => {
      return coffee.spawn('eslint', [ './align/statements-error.ts' ], { cwd })
        // .debug()
        .expect('stdout', /indent/)
        .expect('code', 1)
        .end();
    });
  });

  describe('reference', () => {
    it('should success with reference', () => {
      return coffee.spawn('eslint', [ './reference/index.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should success with unused variables', () => {
      return coffee.spawn('eslint', [ './reference/unused-vars.ts' ], { cwd })
        // .debug()
        .expect('code', 1)
        .end();
    });
  });

  describe('no-useless-constructor', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ './constructor/correct.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail', () => {
      return coffee.spawn('eslint', [ './constructor/not-correct.ts' ], { cwd })
        // .debug()
        .expect('code', 1)
        .expect('stdout', /@typescript-eslint\/no-useless-constructor/)
        .end();
    });
  });

  describe('no-use-before-define', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ './no-use-before-define/correct.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail', () => {
      return coffee.spawn('eslint', [ './no-use-before-define/not-correct.ts' ], { cwd })
        // .debug()
        .expect('code', 1)
        .expect('stdout', /@typescript-eslint\/no-use-before-define/)
        .end();
    });
  });

  describe('no-undef', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ './no-undef/correct.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });
  });

  describe('ban-types', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ './ban-types/correct.ts' ], { cwd })
        .debug()
        .expect('code', 0)
        .end();
    });

    it('should fail', () => {
      return coffee.spawn('eslint', [ './ban-types/not-correct.ts' ], { cwd })
        // .debug()
        .expect('code', 1)
        .expect('stdout', /@typescript-eslint\/ban-types/)
        .end();
    });
  });
});
