# Nanoflakes - JavaScript

[![npm](https://img.shields.io/npm/v/nanoflakes)](https://www.npmjs.com/package/nanoflakes)
[![GitHub issues](https://img.shields.io/github/issues/nanoflakes/nanoflakes-js)](https://github.com/nanoflakes/nanoflakes-js/issues)
[![License](https://img.shields.io/github/license/nanoflakes/nanoflakes-js)](https://github.com/nanoflakes/nanoflakes-js/tree/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fnanoflakes%2Fnanoflakes-js)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fnanoflakes%2Fnanoflakes-js)

Reference implementation of [nanoflakes](https://github.com/nanoflakes/nanoflakes) for JavaScript.

Licensed under the [MIT License](https://github.com/nanoflakes/nanoflakes-java/blob/master/LICENSE).

### Installation

Run the following command to install the package:

```shell
# on NPM...
$ npm install nanoflakes

# on Yarn...
$ yarn add nanoflakes
```

### Usage

- Use `localGenerator(epoch, generatorId)` to create a local nanoflake generator.
    - You can get an epoch by calling `Date.now()` in a Node.js shell.
    - A generator ID must be in the 0-1023 range.
- Use `NanoflakeGenerator.next()` to get a new nanoflake.
- The `Nanoflake` class is the result type `NanoflakeGenerator.next()`. It can be used as-is, or getting it's raw or encoded value. It also features utility methods such as getting the creation time of the nanoflake.

### Support

Extra support is given on [Cafeteria Development](https://discord.gg/MrH5AXZABr).

[![Aru's Discord Server](https://discordapp.com/api/guilds/707435077679841350/embed.png?style=banner2)](https://discord.gg/MrH5AXZABr)
