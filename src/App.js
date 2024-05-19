import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {startClock: true}

  onButton = () => {
    const {startClock} = this.state
    this.setState(prvt => ({startClock: prvt.startClock}))
  }
  render() {
    return (
      <div className="app-container">
        <button type="button" onClick={this.onButton} className="toggle-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            className="image"
          />
        </button>
        <Clock />
      </div>
    )
  }
}

export default App
