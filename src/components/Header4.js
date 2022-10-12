import React, { Component } from 'react';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import {  TbCircle1, TbCircle2, TbCircle3, TbCircle4} from "react-icons/tb";
import { HiOutlineMinus } from "react-icons/hi";
export default class Header4 extends Component {
    render() {
        return (
            <>
                {/* <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            Give a FeedBack / File a complaint
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <br /> */}
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
                            {/* <div className="text-end">
                                <span className="step"><TbCircle1></TbCircle1></span>
                                <span className="line"><HiOutlineMinus></HiOutlineMinus></span>
                                <span className="step"><TbCircle2></TbCircle2></span>
                                <span className="line"><HiOutlineMinus></HiOutlineMinus></span>
                                <span className="step"><TbCircle3></TbCircle3> </span>
                                <span className="line"><HiOutlineMinus></HiOutlineMinus></span>
                                <span className="step"><TbCircle4></TbCircle4></span>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </>   
        )
    }
}
