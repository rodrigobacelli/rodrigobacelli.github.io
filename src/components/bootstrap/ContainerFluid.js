import React, { Component, propTypes } from 'react';

export default class ContainerFluid extends Component {
    render() {
        return (
            <div
                className={
                    (this.props.className)?
                        "container-fluid "+this.props.className:"container-fluid"
                }
                id={ this.props.id }
            >
                {this.props.children}
            </div>
        );
    }
}