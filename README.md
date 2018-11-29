# formio-inputs

> 3kb compressed form component that takes care of everything for you.

> formio stands for form input and output.

[![NPM](https://img.shields.io/npm/v/formio.svg)](https://www.npmjs.com/package/formio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add formio-inputs
```

```bash
npm install --save formio-inputs
```

## Basic Usage

```jsx
import React, { Component } from 'react'

import Formio from 'formio-inputs'

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
        theme={'bootstrap'}
      />
    )
  }
}
```

## Props
Props with a asterisk (*) is required

| Props  | Type | Description |
| :------------- | :------------- | :---------- |
| `input`* | array | a list of input objects to generate |
| `change` | function | Callback function triggers upon input change and returns the entire form state |
| `submit` | function | Callback function triggers upon clicking on the submit button |
| `theme` | string | Form theme `bootstrap` (default), `material`, `classic` |
| `buttonStyle` | object | Style object that customizes the submit button design

## Todo
1. Support for select options and checkbox inputs
2. Support for file input
3. Support for multi file input
4. Test coverage

## Issues
For all bug related issue please refer to the issues page and submit an issue

## Contributions
If you would like a feature implemented consider submitting a PR yourself! All contributions welcomed.

## License

MIT © [mxdi9i7](https://github.com/mxdi9i7)
