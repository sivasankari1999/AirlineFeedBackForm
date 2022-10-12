import React, { Component } from 'react'
import Header4 from './Header4'
import "./Page4.css"
import Card from 'react-bootstrap/Card';
import airline from "../assets/Img/airline.png"
import redline from "../assets/Img/redline.jpg"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
export default class Page4 extends Component {
    render() {
        return (
            <>
                <Header4 />
                <Card>
                    <img src={airline} alt="airline" className="airlineimg" />
                    <Container>
                        <Row>
                            <Col><h1>ThankYou For your</h1></Col>
                        </Row>
                        <Row>
                            <Col><h1>FeedBack.</h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={redline} alt="redline" className="redlineImg"></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>If You requested a reply ,
                                    you will receive an acknowledgment email with your</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>case number and other important information.
                                    We appreciate your feedback.</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>
                                    and thank you for flying Delta.
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                       <br/>
                </Card>
            </>
        )
    }
}
