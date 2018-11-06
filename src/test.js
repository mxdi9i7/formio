import Enzyme from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'
import React from 'react'
import { mount, shallow, render } from 'enzyme'
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

describe('Formio component should', () => {
  test('render', () => {
    const mockProps = {
      inputs: mockInputs
    }
    const wrapper = shallow(<Formio {...mockProps} />)
    expect(wrapper).toBeTruthy()
  })
  test('')
})
