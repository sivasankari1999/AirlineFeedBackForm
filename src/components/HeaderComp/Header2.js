import React, { Component } from 'react';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
export default class Header2 extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="subtitleName">Leave your Comment</Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <Row>
                        <Col className="subtitleName">Please provide as much as details you can</Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
