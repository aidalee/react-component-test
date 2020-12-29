import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Alert, { AlertProps } from './alert'

const testProps: AlertProps = {
  title: 'title',
  onClose: jest.fn()
}

const typeProps: AlertProps = {
  ...testProps,
  type: 'success',
  description: 'hello',
  closable: false
} 

describe('test Alert component', () => {
  it('should render the correct default alert', ()=>{
    const wrapper = render(<Alert {...testProps}></Alert>)
    const {getByText, container, queryByText} = wrapper
    expect(queryByText('title')).toBeInTheDocument()
    expect(container.querySelector('.viking-alert')).toHaveClass('viking-alert-default')
    fireEvent.click(getByText('关闭'))
    // expect(testProps.onClose).toHaveBeenCalled()
    // expect(queryByText('title')).not.toBeInTheDocument()
  })
  it('should render the correct Alert based on diffrent type and description', () => {
    const {container, queryByText} = render(<Alert {...typeProps}></Alert>)
    expect(queryByText('title')).toBeInTheDocument()
    expect(container.querySelector('.viking-alert')).toHaveClass('viking-alert-success')
    expect(queryByText('hello')).toBeInTheDocument()
    // expect(queryByText('times')).not.toBeInTheDocument()
  })
})