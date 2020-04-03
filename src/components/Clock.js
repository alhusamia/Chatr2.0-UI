import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div
        style={{
          color: "rgb(4, 192, 104)",
          textShadow:
            " 1px 1px 2px black, 0 0 25px rgb(245, 242, 242), 0 0 5px #7a7d80"
        }}
      >
        <h3>{this.state.time.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}
export default Clock;
