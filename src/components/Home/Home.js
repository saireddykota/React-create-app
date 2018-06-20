import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    };
    this.onChange = (e) => {
      this.setState({ value: e.target.value });
    };
    this.keyDown = (e) => {
      if (e.which === 13) {
        this.addtoList();
      }
    };
    this.addtoList = () => {
      const ulList = this.state.list;
      ulList.push(this.state.value);
      this.setState({ list: ulList, value: '' });
    };
    this.remove = (val) => {
      const rmList = this.state.list;
      rmList.splice(rmList.indexOf(val), 2);
      this.setState({ list: rmList });
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange} onKeyDown={this.keyDown} />
        <button onClick={this.addtoList}>Submit</button>
        <ul>
          {
            this.state.list.map((val, index) => (
              <li key={index}>
                {val}
                <button onClick={() => this.remove(val)}>x</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Home;
