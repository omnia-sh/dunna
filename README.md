# Dunna

Dunna generates random data based on given parameters

To get started install dunna and import it

```js
// ES6

import dunna from 'dunna';
```

```js
// Commonjs

const dunna = require('dunna');
```

## functions

### integer

To get an integer you can run `dunna.integer()` This will give a random integer between **0** (the min included) and **1,000,000** (the max not included)

To customize this behavour you can pass config param to specifiy min and max like this

`dunna.integer({min: 5, max: 150})`
