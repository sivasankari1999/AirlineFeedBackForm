import React, { Component } from 'react';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Header1 extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="subtitleName">Personal Information</Col>
                    </Row>
                    <Row>
                        <Col className="subtitleName">Please provide your contact information</Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
