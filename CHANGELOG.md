# Changelog

## [13.0.0](https://github.com/eggjs/eslint-config-egg/compare/v12.3.1...v13.0.0) (2023-09-17)


### ⚠ BREAKING CHANGES

* Drop Node.js < 16 support

```
WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.2.0

YOUR TYPESCRIPT VERSION: 5.2.2

Please only submit bug reports when using the officially supported version.
```

### Features

* avoid @typescript-eslint/typescript-estree warning message ([#69](https://github.com/eggjs/eslint-config-egg/issues/69)) ([#70](https://github.com/eggjs/eslint-config-egg/issues/70)) ([2189460](https://github.com/eggjs/eslint-config-egg/commit/2189460b1b40c9c68abe7b6f999ee730f45d65ac))

## [12.3.1](https://github.com/eggjs/eslint-config-egg/compare/v12.3.0...v12.3.1) (2023-09-17)


### Reverts

* Revert "feat: avoid @typescript-eslint/typescript-estree warning message (#69)" ([1923200](https://github.com/eggjs/eslint-config-egg/commit/19232008170a6ec2480c624c97e6a01b1f26406a)), closes [#69](https://github.com/eggjs/eslint-config-egg/issues/69)

## [12.3.0](https://github.com/eggjs/eslint-config-egg/compare/v12.2.1...v12.3.0) (2023-09-16)


### Features

* avoid @typescript-eslint/typescript-estree warning message ([#69](https://github.com/eggjs/eslint-config-egg/issues/69)) ([afde702](https://github.com/eggjs/eslint-config-egg/commit/afde7022fcf991842f43699c0d1c944f9969a381))

## [12.2.1](https://github.com/eggjs/eslint-config-egg/compare/v12.2.0...v12.2.1) (2023-03-25)


### Bug Fixes

* enforce-node-prefix rule should support on commonjs ([#68](https://github.com/eggjs/eslint-config-egg/issues/68)) ([b1a1316](https://github.com/eggjs/eslint-config-egg/commit/b1a13161b18afc5c3316e61206e9c8ae3039cdcf))

## [12.2.0](https://github.com/eggjs/eslint-config-egg/compare/v12.1.0...v12.2.0) (2023-03-24)


### Features

* Add enforce "node:" prefix rule on import module ([#67](https://github.com/eggjs/eslint-config-egg/issues/67)) ([5a1aa4e](https://github.com/eggjs/eslint-config-egg/commit/5a1aa4e283c0dac38eeb4bedb0f259ee6f099120))
