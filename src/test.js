/* eslint-disable no-unused-vars */
import Adaptor from 'enzyme-adapter-react-16'
import React from 'react'
import Enzyme, { mount, shallow, render } from 'enzyme'
import Formio from './'

Enzyme.configure({ adapter: new Adaptor() })
const mockInputs = [
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
const mockChangeMethod = jest.fn()
let props
beforeEach(() => {
  props = {
    inputs: mockInputs,
    change: () => {}
  }
})

describe('Formio component should', () => {
  test('render', () => {
    const wrapper = shallow(<Formio {...props} />)
    expect(wrapper).toBeTruthy()
  })
  test('render the same number of inputs as the length of inputs array prop', () => {
    const wrapper = shallow(<Formio {...props} />)
    expect(wrapper.find('input')).toHaveLength(props.inputs.length)
  })
  test('trigger handleFormChange and update state value based on input', () => {
    const wrapper = shallow(<Formio {...props} />)
    const mockKey = 'foo'
    const mockValue = 'bar'
    wrapper.instance().handleFormChange(mockKey, mockValue)
    expect(wrapper.state(mockKey)).toEqual(mockValue)
  })
  test('trigger handleFormChange will call on props change method', () => {
    props.change = mockChangeMethod
    const wrapper = shallow(<Formio {...props} />)
    wrapper.instance().handleFormChange()
    expect(mockChangeMethod).toHaveBeenCalled()
  })
})
