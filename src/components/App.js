import React, { Component } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                { React.cloneElement(this.props.children) }
                <Footer />
            </div>
        );
    }
}