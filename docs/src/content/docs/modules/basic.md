---
title: Basic
description: This is a basic module
---

This is a basic module, it contains integer, float, string, boolean, and date types.

## Boolean

`dunna.basic.boolean()` returns a random boolean value.

```js
// Use default likelihood = 50
dunna.basic.boolean(); // true
dunna.basic.boolean(); // false
dunna.basic.boolean(); // false

// Modify likelihood
dunna.basic.boolean({ likelihood: 80 }); // The output has chance of 80% to be true
dunna.basic.boolean({ likelihood: 20 }); // The output has chance of 20% to be true
```

## Integer

`dunna.basic.integer()` returns a random integer between 0 (not inclusive) and 10 (inclusive)

```js
dunna.basic.integer(); // 4
dunna.basic.integer(); // 7
dunna.basic.integer(); // 4

// Customize parameters
dunna.integer({ min: 1, max: 100 });
dunna.integer({ min: -10, max: 10 });
```

## Float

`dunna.basic.float()` returns a random float number between 0 (inclusive) and 10 (not inclusive)

```js
dunna.basic.float(); // 4.364
dunna.basic.float(); // 8.834

// Parameters
dunna.float({ min: 3, max: 36, fixed: 5 });
```
