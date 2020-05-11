import React, { Component } from 'react';
class Username extends Component {
    state = { value: "" };
    changeValue(value) {
      this.setState({ value });
    }
    render() {
      const { value } = this.state;
      return <h1>{value}</h1>;
    }
  }
  export default Username;