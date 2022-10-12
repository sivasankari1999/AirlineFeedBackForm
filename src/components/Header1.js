import React, { Component } from 'react';
import './Header1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {  TbCircle1, TbCircle2, TbCircle3, TbCircle4} from "react-icons/tb";
import { HiOutlineMinus } from "react-icons/hi";
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



            // <div className="container1">
            //     <div className="header1">
            //         <h6 className="align-items-start">c</h6>
            //     </div>

            // </div>
            // <div>
            //     <div className="title">
            //         <p className="titlename">Give a FeedBack / File a complaint</p>
            //     </div>
            //     <div>
            //         <p className="subtitlename">Personal Information</p>
            //     </div>
            //     <div>
            //         <p className="extradetails" >Please provide your contact information</p>
            //     </div>
            //     <div className="maincontainer">
            //         <div>
            //             <p className="login">Are You a Skylines Member?<a className="Logintag">Login</a> So we can help you faster</p>
            //         </div>
            //         <hr />
            //          <div>
            //             <p className="allfield">All fields required unless noted</p>
            //         </div>
            //         <br />
            //         <div>
            //             <p className="fullname1">Please make sure your Full Name is entered exactly as it appears on your government issued Id</p>
            //             <p className="fullname2"> (example:Jane Elizabeth Doe)</p>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
