import React, { Component } from 'react';
import { Container, Row, Col } from './bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { gallery } from '../data/selectors'

class Gallery extends Component {
    render() {
        console.log(this.props);
        return (
            <Container>
                <Row className="gallery" >
                    {
                        this.props.projects.map(function(item){
                            return(
                                <Col xs="12" sm="4" md="3"  lg="3" className="project">
                                    <Link to={`/`+item.slug}>
                                        <img src={item.image} />
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default connect(gallery)(Gallery)