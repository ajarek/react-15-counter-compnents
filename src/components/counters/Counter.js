import React from 'react'
import Number from '../numbers/Number'
import Button from '../buttons/Button'
import './Counter.css'
export class Counter extends React.Component {
  constructor (initialProps) {
    super()
    this.state = {
      number: initialProps.initialNumber
    }
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  reset = () => {
    this.setState({
      number: 0
    })
  }

  render () {
    return (
      <div>
        <Number numberProp={this.state.number} />
        <div className={'row'}>
          <Button
            onClick={this.increment}
            label={'➕'}
          >
          </Button>
          <Button
            onClick={this.reset}
            label={'RESET'}
          >
          </Button>
          <Button
            onClick={this.decrement}
            label={'➖'}
          >
          </Button>
        </div>
      </div>
    )
  }
}
Counter.defaultProps = {
  initialNumber: 0
}
export default Counter
