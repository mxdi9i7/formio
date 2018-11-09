# formio

> imple form library that bootstraps an interactive form th

[![NPM](https://img.shields.io/npm/v/formio.svg)](https://www.npmjs.com/package/formio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add formio
```

```bash
npm install --save formio
```

## Basic Usage

```jsx
import React, { Component } from 'react'

import Formio from 'formio'

const inputs = [
 {
   key: 'email', 
   type: 'email',
   label: 'Email:',
   placeholder: 'Enter your email here'
 },
 {
   key: 'password',
   type: 'password',
   label: 'Password',
   placeholder: 'Enter your password here'
 }
]

class Example extends Component {
  render () {
    return (
      <Formio 
        inputs={inputs}
        change={this.handleFormChange}
        submit={this.handleFormSubmit}
        theme={'alpha'}
      />
    )
  }
}
```

## Props
Props with a asterisk (*) is required

| Props | Default Value/Type | Description |
| --- | --- |
| `input` | array | a list of input objects to generate |

## License

MIT © [mxdi9i7](https://github.com/mxdi9i7)
