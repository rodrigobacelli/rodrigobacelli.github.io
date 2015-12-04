import React, { Component } from 'react';
import { Container, Row, Col } from './bootstrap';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="teste teste2" >
                    <Col xs="12" sm="6" md="4" >
                        <Link to={`/`}>
                            <img src="http://www.hdwallpapers.org/wallpapers/caribbean-sea-beautiful-clouds-1920x1080.jpg" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}