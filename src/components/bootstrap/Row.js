import React, { Component, propTypes } from 'react';

export default class Row extends Component {
    render() {
        return (
            <div
                className={
                    (this.props.className)?"row "+this.props.className:"row"
                }
                id={ this.props.id }
            >
                { this.props.children }
            </div>
        );
    }
}