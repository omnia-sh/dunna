---
title: Basic
---

# Boolean

Generate a random boolean with predefined likelihood

```js
dunna.boolean(); // -> Boolean likelihood = 50
dunna.boolean({ likelihood: 60 }); // -> Boolean likelihood = 60
```

# Integer

Generate a random integer with predefined min and max

```js
dunna.integer(); // -> min = 0, max = 10;
dunna.integer({ max: 20 }); // -> min = 0, max = 20
dunna.integer({ min: 5 }); // -> min = 5, max = 10
```

# Float

Generate a random float number with defined min, max, fixed

```js
dunna.float(); // -> min = 0, max = 10, fixed = 3
dunna.float({ min: 5 }); // -> min = 5, max = 10, fixed = 3
dunna.float({ max: 64 }); // -> min = 0, max = 64, fixed = 3
dunna.float({ min: 3, max: 64, fixed: 2 }); // -> min = 3, max = 64, fixed = 2
```
