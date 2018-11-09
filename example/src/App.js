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
    label: 'Password:',
    placeholder: 'Enter your password here'
  }
]
const buttonStyle = {
  fontSize: '16px'
}
export default class App extends Component {
  handleInputChange = (value) => {
    this.setState(value)
  };
  handleSubmit = (value) => {
    console.log(value)
  }
  render () {
    return (
      <div>
        <Formio
          inputs={inputs}
          change={this.handleInputChange}
          submit={this.handleSubmit}
          theme={'bootstrap'}
          buttonStyle={buttonStyle}
        />
      </div>
    )
  }
}
