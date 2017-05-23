import React, { Component } from 'react';


class Root extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Root />
      <Root />
      <Root />
    </div>
  );
}
