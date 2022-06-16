---
title: Basic
sidebar_position: 1
---

# Basic

## Boolean

`dunna.boolean()` returns a random boolean (`true` or `false`)

```js
// Use default likelihood = 50
dunna.boolean(); // true
dunna.boolean(); // false
dunna.boolean(); // false

// Modify likelihood
dunna.boolean({ likelihood: 80 }); // The output has chance of 80% to be true
dunna.boolean({ likelihood: 20 }); // The output has chance of 20% to be true
```

| Name       | Type   | Default | Description                       |
| ---------- | ------ | ------- | --------------------------------- |
| likelihood | number | 50      | The likelihood of true occurrence |

## Integer

`dunna.integer()` returns a random integer between 0 (inclusive) and 10 (bot inclusive)

```js
dunna.integer(); // 4
dunna.integer(); // 7
dunna.integer(); // 4

// Customize parameters
dunna.integer({ min: 1, max: 100 });
dunna.integer({ min: -10, max: 10 });
```

| Name | Type   | Default | Description                      |
| ---- | ------ | ------- | -------------------------------- |
| min  | number | 0       | The min number (`inclusive`)     |
| max  | number | 10      | The max number (`not inclusive`) |

## Float

`dunna.float()` returns a random float number between 0 (inclusive) and 10 (not inclusive)

```js
dunna.float(); // 4.364
dunna.float(); // 8.834

// Parameters
dunna.float({ min: 3, max: 36, fixed: 5 });
```

| Name  | Type   | Default | Description                              |
| ----- | ------ | ------- | ---------------------------------------- |
| min   | number | 0       | The min number (`inclusive`)             |
| max   | number | 10      | The max number (`not inclusive`)         |
| fixed | number | 3       | count of digits after the floating point |

## Letter

`dunna.letter()` returns a random uppercase or lowercase letter

```js
dunna.letter(); // h
dunna.letter(); // E

// Parameters
dunna.letter({ casing: 'upper' });
```

| Name   | Type                  | Default | Description                      |
| ------ | --------------------- | ------- | -------------------------------- |
| casing | upper \| lower \| any | any     | Specify the casing of the letter |

## Choice

`dunna.choice(array)` returns a random element from an array

```js
dunna.choice(['Alice', 'Bob', 'Charlie']); // Alice
dunna.choice(['Alice', 'Bob', 'Charlie']); // Charlie
```
