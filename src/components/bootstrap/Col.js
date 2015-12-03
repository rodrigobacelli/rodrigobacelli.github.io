import React, { Component, propTypes } from 'react';

export default class Col extends Component {
    render() {
        console.log(this.props);
        let classes = (this.props.className)?this.props.className+" ":"";
        classes += (this.props.xs)?"col-xs-"+this.props.xs+" ":"";
        classes += (this.props.sm)?"col-sm-"+this.props.sm+" ":"";
        classes += (this.props.md)?"col-md-"+this.props.md+" ":"";
        classes += (this.props.lg)?"col-lg-"+this.props.lg+" ":"";
        return (
            <div
                className={
                    classes
                }
                id={ this.props.id }
            >
                { this.props.children }
            </div>
        );
    }
}