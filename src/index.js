import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

export default class Formio extends Component {
  static defaultProps = {
    theme: 'bootstrap'
  }
  constructor(props) {
    super(props)
    this.state = {}
  };
  static propTypes = {
    inputs: PropTypes.array,
    theme: PropTypes.string,
    submit: PropTypes.func,
    change: PropTypes.func,
    autocomplete: PropTypes.bool,
    buttonStyle: PropTypes.string
  }
  componentDidMount = () => {
  };
  componentWillMount = () => {
    this.checkInitialProps()
  };
  mapInputsToState = () => {
    this.props.inputs.forEach(item => this.setState({[item.key]: ''}))
  };
  checkInitialProps = () => {
    if (!this.props.inputs) {
      console.error('Do not leave the inputs value blank, you need to supply an array.')
    } else {
      this.mapInputsToState()
    }
  };
  handleFormChange = (key, value) => {
    this.setState({ [key]: value }, () => {
      this.props.change(this.state)
    })
  };
  handleFormSubmit = () => {
    this.props.submit(this.state)
  };
  renderFormInputs = () => {
    const containerClassNames = [
      `${this.props.theme}-theme`,
      'formio-container'
    ]
    const inputClassNames = [
      'formio'
    ]
    return (
      <div
        className={containerClassNames.join(' ')}
      >
        {
          this.props.inputs ? this.props.inputs.map((item, i) => {
            return (
              <div
                key={i}
                className={inputClassNames.join(' ')}
              >
                <label htmlFor={item.key}>{item.label}</label>
                <input
                  type={item.type}
                  value={this.state[item.key]}
                  placeholder={item.placeholder || ''}
                  onChange={(e) => this.handleFormChange(item.key, e.target.value)}
                  autoComplete={this.props.autocomplete}
                />
              </div>
            )
          }) : ''
        }
        <button
          style={this.props.buttonStyle}
          onClick={this.handleFormSubmit}
        >
            Submit
        </button>
      </div>
    )
  };
  render() {
    return (
      <div className={styles.test}>
        {this.renderFormInputs()}
      </div>
    )
  }
}
