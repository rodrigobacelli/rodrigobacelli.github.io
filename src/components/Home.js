import React, { Component } from 'react';
import Gallery from './Gallery';
import Nav from './Nav';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Gallery />
            </div>
        );
    }
}