import React, { Component } from 'react';
import { Container, Row, Col } from './bootstrap';
import { connect } from 'react-redux';
import { project } from '../data/selectors';

class Project extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col xs="12" md="8"mdOffset="2" className="project">
                        <img src={this.props.project.image} />
                        <h1>{this.props.project.name}</h1>
                        <p>{this.props.project.description}</p>
                        <p>Link: <a href={this.props.project.link} target="new">{this.props.project.link}</a>{(this.props.project.deprecated)?" (Substituído por versão mais recente)":""}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(project)(Project)