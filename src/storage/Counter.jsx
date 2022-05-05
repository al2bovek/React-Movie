import React, { Component } from "react";

class Counter extends Component {
  
  state = {
    count: 0
  };

  handleIncrement = () => {
    
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDecrease = () => {
    
    this.setState({
      count: this.state.count - 1
    });
  };
  handleReset = () => {
    
    this.setState({
      count: this.state.count = 0
    });
  };

  render() {
    return (
      <div>
        <h1>count {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrease}>Decrease</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;