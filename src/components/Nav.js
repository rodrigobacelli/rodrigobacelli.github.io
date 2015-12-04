import React, { Component } from 'react';
import {ContainerFluid, Row, Col} from './bootstrap';
import {Link} from 'react-router';

export default class Home extends Component {
    render() {
        return(
            <header className="navbar">
                <ContainerFluid>
                    <Col xs="11" sm="11" md="3" lg="3" mdOffset="1">
                        <Link to={`/`} className="logo">
                            rodrigo bacelli
                        </Link>
                    </Col>
                </ContainerFluid>
            </header>
        );
    }
}