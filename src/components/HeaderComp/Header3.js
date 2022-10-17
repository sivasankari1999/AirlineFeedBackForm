import React, { Component } from 'react';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
export default class Header3 extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="subtitleName">Review Your Information</Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="subtitleName">Please confirm the information below is correct</Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </>   
        )
    }
}
