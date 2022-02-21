'use strict';

/**
 * all rules https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
 */

module.exports = {
  extends: [ 'plugin:@typescript-eslint/recommended' ],

  rules: {
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-type': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'spaced-comment': [ 'error', 'always', {
      exceptions: [ '-', '+' ],
      markers: [ '*!', '/' ],
    }],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
          object: false,
        },
        extendDefaults: true,
      },
    ],

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     */
    semi: 'off',
    '@typescript-eslint/semi': [ 'error' ],

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [ 'error', {
      functions: false,
      classes: true,
    }],

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': [ 'error' ],

    /**
     * An empty interface is equivalent to its supertype
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
     */
    '@typescript-eslint/no-empty-interface': 'off',

    /**
     * Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error', {
      vars: 'local',
      args: 'after-used',
    }],

    /**
     * Enforce camelCase naming convention
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
     */
    '@typescript-eslint/camelcase': 'off',

    /**
     * Require explicit return types on functions and class methods
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /**
     * Require explicit accessibility modifiers on class properties and methods (`member-access` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/issues/1824#issuecomment-957559729
    // ignore
    indent: 'off',

    /**
     * Enforce consistent indentation (`indent` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
     */
    '@typescript-eslint/indent': [ 'error', 2, {
      SwitchCase: 1,
      ignoredNodes: [
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
      ],
    }],

    /**
     * Require that interface names be prefixed with `I` (`interface-name` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
     */
    '@typescript-eslint/interface-name-prefix': 'off',

    /**
     * Require a consistent member declaration order (`member-ordering` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
     */
    '@typescript-eslint/member-ordering': 'off',

    /**
     * Disallow usage of the `any` type (`no-any` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    '@typescript-eslint/no-explicit-any': 'off',

    /**
     * Disallow the use of custom TypeScript modules and namespaces (`no-namespace` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
     */
    '@typescript-eslint/no-namespace': 'off',

    /**
     * Disallows non-null assertions using the `!` postfix operator (`no-non-null-assertion` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
     */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /**
     * Forbids an object literal to appear in a type assertion expression (`no-object-literal-type-assertion` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-object-literal-type-assertion.md
     */
    '@typescript-eslint/no-object-literal-type-assertion': 'off',

    /**
     * Disallow the use of parameter properties in class constructors. (`no-parameter-properties` from TSLint)
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
     */
    '@typescript-eslint/no-parameter-properties': 'off',

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    '@typescript-eslint/triple-slash-reference': 'off',

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
     */
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: [ 'self' ], // Allow `const self = this`; `[]` by default
      },
    ],
  },
};
