import React, { Component } from 'react';
import Icon from 'react-fa';
import {ContainerFluid, Row, Col} from './bootstrap';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <ContainerFluid>
                    <Row>
                        <Col sm="12">
                            <a href="https://br.linkedin.com/in/rodrigobacelli" target="_blank">
                                <Icon name="linkedin" className="linkedin" />
                            </a>
                            <a href="https://github.com/rodrigobacelli" target="_blank">
                                <Icon name="github" className="github" />
                            </a>
                            <a href="mailto:rodrigobac@gmail.com" target="_blank">
                                <Icon name="envelope" /> rodrigobac@gmail.com
                            </a>
                        </Col>
                    </Row>
                </ContainerFluid>
            </footer>
        );
    }
}