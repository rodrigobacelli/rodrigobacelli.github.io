import React, { Component } from 'react';
import { Container, Row, Col } from './bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="teste teste2" >
                    <Col xs="12" sm="6" md="3" >
                        Aur
                    </Col>
                </Row>
            </Container>
        );
    }
}