# Dunna

Dunna generates random data based on given parameters

## Get started

### Installation

```
# Using npm
npm install dunna
```

```sh
# Using yarn
yarn add dunna
```

### Import dunna

```js
// ES6

import dunna from 'dunna';
```

```js
// Commonjs

const dunna = require('dunna').default;
```

### Calling dunna functions

```js
import dunna from 'dunna';

// Get a random integer
dunna.integer();

// Get a random female name
dunna.firstName({ gender: 'female' });

// Get a random city name
dunna.cityName();
```
