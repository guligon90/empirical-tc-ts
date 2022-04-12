# empirical-tc-ts

POC regarding the experimental determination of time complexities of algorithms written in TypeScript.

I wrote an article on [Medium](https://medium.com/@guligon90/determining-time-complexity-of-algorithms-experimentally-4f844a5080ec), that explains the motivation behind this implementation.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [1. Getting started](#1-getting-started)
- [2. Running the analysis](#2-running-the-analysis)
- [3. Quality assurance](#3-quality-assurance)
  - [3.1. Unit tests](#31-unit-tests)
  - [3.2. Code linting](#32-code-linting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 1. Getting started

In order to run this project, you must have already properly installed and configured the following dependencies:

* [Node.js (v16.13.1)](https://nodejs.org/ru/blog/release/v16.13.1/)
* [Yarn (v1.22.18)](https://github.com/yarnpkg/yarn/releases)

## 2. Running the analysis

In order to evaluate the asymptotic analysis and generate the plots, run at the terminal:
```shell
yarn start
```

If you want to perform the same operation, but without generating transpiled javascript (development mode):
```shell
yarn dev
```

## 3. Quality assurance

### 3.1. Unit tests

With the project dependencies properly installed, the unit tests can be executed via terminal:
```shell
yarn test
```

Similarly, ro generate the coverage report, just run the command:
```shell
yarn coverage
```

### 3.2. Code linting

To format the code base to a preset pattern, just run:
```shell
yarn prettier
```

To generate the code linting report, but not apply the necessary fixes:
```shell
yarn lint
```

To generate the code linting report and apply the necessary fixes:
```shell
yarn lint:fix
```
