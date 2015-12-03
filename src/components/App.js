import React, { Component } from 'react';
import {Link} from "react-router"

export default class App extends Component {
  render() {
    return React.cloneElement(this.props.children);
  }
}