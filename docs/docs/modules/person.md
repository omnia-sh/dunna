---
title: Person
sidebar_position: 2
---

# Person

## Gender

`dunna.gender()` returns a random gender male or female

```js
dunna.gender(); // male
dunna.gender(); // female
```

## First name

`dunna.firstName()` returns a random male or female firstName

```js
dunna.firstName(); // Peter
dunna.firstName(); // Hector
dunna.firstName(); // Kathie

// Parameters
dunna.firstName({ gender: 'male' });
```

| Name   | Type           | Default     | Description                       |
| ------ | -------------- | ----------- | --------------------------------- |
| gender | male \| female | `undefined` | The likelihood of true occurrence |

## Last Name

`dunna.lastName()` returns a random lastName

```js
dunna.lastName(); // Smith
dunna.lastName(); // TODO
```

## Full Name

`dunna.fullName()` returns a random male or female full name (firstName + lastName)

```js
dunna.fullName(); // Hector Smith
dunna.fullName(); // TODO
dunna.fullName(); // TODO

// Parameters
dunna.fullName({ gender: 'female' }); // Return a random female full name
```

| Name   | Type           | Default     | Description                       |
| ------ | -------------- | ----------- | --------------------------------- |
| gender | male \| female | `undefined` | The likelihood of true occurrence |

## Email

`dunna.email()` returns a random male or female email address

```js
dunna.email(); // hector_smith@example.com
dunna.email(); // peter_smith@example.com

// Parameters
dunna.email({ gender: 'male' }); // Return a male email
```

| Name   | Type           | Default     | Description                       |
| ------ | -------------- | ----------- | --------------------------------- |
| gender | male \| female | `undefined` | The likelihood of true occurrence |

## Person

`dunna.person()` returns a random person details (firstName, lastName, gender, email)

```js
dunna.person();

// Parameters
dunna.person({ gender: 'female' });
```

| Name   | Type           | Default     | Description                       |
| ------ | -------------- | ----------- | --------------------------------- |
| gender | male \| female | `undefined` | The likelihood of true occurrence |
