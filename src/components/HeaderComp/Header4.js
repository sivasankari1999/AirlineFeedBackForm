import React, { Component } from 'react';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
export default class Header4 extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="subtitleName">Confirmation</Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <Row>
                        <Col className="subtitleName">Your Comment has been submitted</Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </>   
        )
    }
}
