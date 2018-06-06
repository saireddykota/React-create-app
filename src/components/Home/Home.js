import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      error: false
    };
    this.increment = () => {
      let counter = this.state.count;
      counter += 1;
      this.setState({ count: counter, error: false });
    };
    this.decrement = () => {
      let decrement = this.state.count;
      if (decrement > 0) {
        decrement -= 1;
        this.setState({ count: decrement });
      } else {
        this.setState({ error: true });
      }
    }

  }
  render() {
    return (
      <div>
        {
          this.state.count
        }
        <button onClick={this.increment}>
          increment me!
        </button>
        <button onClick={this.decrement}>
          decrement me!
        </button>
        {
          this.state.error && // if (this.state.error)
          <h2>it is already minimum</h2>
        }
      </div>
    );
  }
}

export default Home;
