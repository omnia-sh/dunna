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

### boolean

To generate a boolean you can run `dunna.boolean()` this will generate a random boolean (true or false) the like hood of true is 50%

To customize that behaviour you can pass config param to specify the likelihood like this

`dunna.boolean({likeliehood: 30})`

### integer

To generate an integer you can run `dunna.integer()` this will generate a random integer between **0** (the min inclusive) and **1,000** (the max not inclusive)

To customize this behaviour you can pass config param to specifiy min and max like this

`dunna.integer({min: 5, max: 150})`

### float

To generate a float number you can run `dunna.float()` this will generate a random float between **0** (the min inclusive) and **1,000** (the max not inclusive)

To customize this behaviour you can pass config param to specifiy min and max like this

`dunna.float({min: 5.6, max: 150})`
