import React, { Component, propTypes } from 'react';

export default class Col extends Component {
    render() {
        let classes = (this.props.className)?this.props.className+" ":"";
        classes += (this.props.xs)?"col-xs-"+this.props.xs+" ":"";
        classes += (this.props.sm)?"col-sm-"+this.props.sm+" ":"";
        classes += (this.props.md)?"col-md-"+this.props.md+" ":"";
        classes += (this.props.lg)?"col-lg-"+this.props.lg+" ":"";
        classes += (this.props.xsOffset)?"col-xs-offset-"+this.props.xsOffset+" ":"";
        classes += (this.props.smOffset)?"col-sm-offset-"+this.props.smOffset+" ":"";
        classes += (this.props.mdOffset)?"col-md-offset-"+this.props.mdOffset+" ":"";
        classes += (this.props.lgOffset)?"col-lg-offset-"+this.props.lgOffset+" ":"";
        classes += (this.props.hiddenXs)?"hidden-xs ":"";
        classes += (this.props.hiddenSm)?"hidden-sm ":"";
        classes += (this.props.hiddenMd)?"hidden-md ":"";
        classes += (this.props.hiddenLg)?"hidden-lg ":"";
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