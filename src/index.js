import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Formio extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  };
  static propTypes = {
    inputs: PropTypes.array,
    change: PropTypes.func
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
  renderFormInputs = () => {
    return (
      this.props.inputs ? this.props.inputs.map((item, i) => {
        return (
          <div key={i}>
            <label htmlFor={item.key}>{item.label}</label>
            <input
              type={item.type}
              value={this.state[item.key]}
              placeholder={item.placeholder || ''}
              onChange={(e) => this.handleFormChange(item.key, e.target.value)}
            />
          </div>
        )
      }) : ''
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
