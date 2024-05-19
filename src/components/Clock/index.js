import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {start: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
    console.log("didmount")
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log("unmount")
  }

  tick = () => {
    this.setState({
      time: new Date(),
    })
  }

  render() {
    const {start} = this.state
    console.log("render",start)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time"> {start.toLocaleTimeString()} </p>
      </div>
    )
  }
}
export default Clock
