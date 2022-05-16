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

### Generators

#### Basic

- [x] boolean
- [x] integer
- [x] float
- [x] letter
- [ ] symbol
- [x] choice

#### Person

- [ ] name
- [ ] age
- [ ] nationality
- [ ] gender
- [ ] email
- [ ] phoneNumber

#### Address

- [ ] country
- [ ] city
- [ ] countryCode
- [ ] flag
- [ ] zipCode
- [ ] longitude
- [ ] latitude
- [ ] timeZone

#### Finance

- [ ] currencyCode
- [ ] currencyName
- [ ] amount

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

### letter

Generate a random letter (upper case or lower case) `dunna.letter()` this will generate a random upper or lower case letter

To customize this behaviour you can pass config param

`dunna.letter({casing: 'any'})` the default
`dunna.letter({casing: 'lower'})`
`dunna.letter({casing: 'upper'})`
