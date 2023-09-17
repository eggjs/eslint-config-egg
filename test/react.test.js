const path = require('path');
const coffee = require('coffee');

describe('test/react.test.js', () => {

  it('should support jsx', () => {
    const cwd = path.join(__dirname, 'fixtures/react-app');
    return coffee.spawn('eslint', [ 'jsx.jsx' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });

  it('should disable forbid-prop-types', () => {
    const cwd = path.join(__dirname, 'fixtures/react-app');
    return coffee.spawn('eslint', [ 'forbid-prop-types.jsx' ], { cwd })
      // .debug()
      .expect('code', 0)
      .end();
  });

  describe('a11y', () => {
    it('should error with no-distracting-elements', () => {
      const cwd = path.join(__dirname, 'fixtures/react-app');
      return coffee.spawn('eslint', [ 'a11y/no-distracting-elements-marquee-error.jsx' ], { cwd })
        // .debug()
        .expect('stdout', /jsx-a11y\/no-distracting-elements/)
        .expect('code', 1)
        .end();
    });

    it('should error with anchor-is-valid', () => {
      const cwd = path.join(__dirname, 'fixtures/react-app');
      return coffee.spawn('eslint', [ 'a11y/anchor-is-valid-error.jsx' ], { cwd })
        // .debug()
        .expect('stdout', /jsx-a11y\/anchor-is-valid/)
        .expect('code', 1)
        .end();
    });
  });

  describe('browser', () => {
    it('should be enable', () => {
      const cwd = path.join(__dirname, 'fixtures/react-app');
      return coffee.spawn('eslint', [ 'browser.js' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });
  });
});
