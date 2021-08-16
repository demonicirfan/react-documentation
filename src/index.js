import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //new Date() creates a new date object with the current date and time:
  }

  //? ------------------lifecycle methods--------------

  //We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React. And is done using this method
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
//setInterval function callss tick after 1 sec
