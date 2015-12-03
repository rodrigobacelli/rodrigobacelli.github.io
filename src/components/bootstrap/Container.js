import React, { Component, propTypes } from 'react';

export default class Container extends Component {
    render() {
        console.log(this.props);
        return (
            <div
                className={
                    (this.props.className)?
                        "container "+this.props.className:"container"
                }
                id={ this.props.id }
            >
                {this.props.children}
            </div>
        );
    }
}