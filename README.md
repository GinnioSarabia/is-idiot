# is-idiot [![NPM version](https://img.shields.io/npm/v/is-idiot.svg?style=flat)](https://www.npmjs.com/package/is-idiot) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-idiot.svg?style=flat)](https://npmjs.org/package/is-idiot) [![NPM total downloads](https://img.shields.io/npm/dt/is-idiot.svg?style=flat)](https://npmjs.org/package/is-idiot)

> Returns true if someone is an idiot.

Please consider following this project's author, [Gabriel Konopinski](https://github.com/gabixdev), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-idiot
```

## Why is this needed?

In JavaScript, it's insanely hard to check that someone is an idiot. This library makes your life much easier because it's extremely lightweight and doesn't affect your application's performance so much!

## Usage

```js
const isIdiot = require('is-idiot');
```

### true

```js
isIdiot("me");                    // true
isIdiot("you");                   // true
isIdiot("node.js developers");    // true
isIdiot('Every JS "programmer"'); // true
```
