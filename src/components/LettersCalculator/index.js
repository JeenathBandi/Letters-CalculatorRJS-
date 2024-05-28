// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterLetters = () =>
    this.setState(prevState => ({count: prevState.count + 1}))

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container-1">
          <h1 className="heading"> Calculate the Letters you enter</h1>
          <label htmlFor="below" className="description">
            Enter the phrase
          </label>
          <input
            className="input-element"
            type="text"
            id="below"
            placeholder="Enter the phrase"
            onChange={this.onEnterLetters}
          />
          <div className="letter-count-container">
            <p className="letters">No.of letters: {count} </p>
          </div>
        </div>
        <div className="container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
