import React, { Component } from 'react';
import styles from './Root.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      count: 0,
    };
  }

  handleClick(e) {
    e.preventDefault();
    /* let data = this.state.count;
    data += 1;
    this.setState({
      count: data
    });*/
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button className={styles.orange} onClick={this.handleClick}>更新</button>
      </div>
    );
  }
}

