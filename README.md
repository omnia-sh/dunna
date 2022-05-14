# Dunna

Dunna generates random data based on given parameters

To get started install dunna and import it

```js
// ES6

import dunna from 'dunna';
```

```js
// Commonjs

const dunna = require('dunna').default;
```

## functions

### integer

To generate an integer you can run `dunna.integer()` This will give a random integer between **0** (the min inclusive) and **1,000** (the max not inclusive)

To customize this behaviour you can pass config param to specifiy min and max like this

`dunna.integer({min: 5, max: 150})`

### float

To generate a float number you can run `dunna.float()` This will generate a random float between **0** (the min inclusive) and **1,000** (the max not inclusive)

To customize this behaviour you can pass config param to specifiy min and max like this

`dunna.float({min: 5.6, max: 150})`
