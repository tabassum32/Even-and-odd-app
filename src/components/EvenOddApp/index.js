// Write your code here

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementBtn = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(previous => ({count: previous.count * randomNumber}))
  }
  render() {
    //
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div>
        <div>
          <h1>Count {count}</h1>
          <p>Count is {displayText}</p>
          <button
            type="button"
            className="button"
            onClick={this.onIncrementBtn}
          >
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
