import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    console.log("Ctor...");
    this.state = {
      title: "",
      body: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => this.setState({ title: data.title, body: data.body }));
  }

  // componentWillMount() {
  //   console.log("WillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("...DidUpdate...");
  // }

  // componentWillUpdate() {
  //   console.log("...WillUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("...componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(nextProps, prevState) {
  //   return null;
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">Test</h1>
        <h3>{title}</h3>

        {body}
      </div>
    );
  }
}

export default Test;
