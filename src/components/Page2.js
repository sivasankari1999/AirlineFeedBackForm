import React, { Component } from 'react'
import Header2 from "./Header2";
import "./Page2.css"
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { FcInfo } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
export default class Page2 extends Component {
    onTrigger = (event) => {
        this.props.parentCallback(3);
        event.preventDefault();
    }
    OnPreview = (event) => {
        // let { country, region, num, selectedAirline, airlines, FlyerNumber,
        //     first_name, last_name, middle_name ,email,address1,address2,city,postalCode} = this.state;
        //     let { airlines_err_mess, first_name_err_mess, last_name_err_mess,
        //         num_err_mess ,email_err_mess,address1_err_mess,city_err_mess,postalCode_err_mess} = this.state
        //         airlines_err_mess= '',
        //         first_name_err_mess='',
        //         last_name_err_mess= '',
        //         email_err_mess='',
        //         address1_err_mess='',
        //         city_err_mess='',
        //         postalCode_err_mess='',
        //         this.setState({
        //             country, region, num, selectedAirline, airlines, FlyerNumber,
        //             first_name, last_name, middle_name ,email,address1,address2,city,postalCode
        //         }, () => console.log(this.state))
        //         this.setState({
        //             airlines_err_mess, first_name_err_mess, last_name_err_mess,
        //         num_err_mess ,email_err_mess,address1_err_mess,city_err_mess,postalCode_err_mess
        //         })
        this.props.parentCallback(1);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <Header2 />
                <div className="maincontainer">
                    <Form>
                        <Card>
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col className="text-end sideText">All Fields are required unless noted</Col>
                                </Row>
                                <Row>
                                    <Col className="text1">In Order to assist you faster ,
                                        please lookup your flight details by providing your Confirmation# and
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text1">Ticket#. Your Fullname must match your Ticket#.
                                        Don't have your Confirmation# or Ticket#?
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text1">Check the box below to continue with
                                        partial (or no) ticket information.
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Fullname
                                    </Col>
                                </Row>
                                <Row className='g-2'>
                                    <Col md>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Confirmaton#"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Confirmation#" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="info">
                                        <FcInfo></FcInfo>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Ticket#"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" placeholder="Ticket#" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col className="info">
                                        <FcInfo></FcInfo>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3 checkboxx" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I don't have any Confirmation# and/or Ticket#" />
                                </Form.Group>
                                <br />
                                <Button size='md' variant="outline-dark" className="lookbut">
                                    Look Up Flight details
                                </Button>
                            </Container>
                        </Card>
                        <br />
                        <br />
                        <Card>
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col className="text-end sideText">All Fields are required unless noted</Col>
                                </Row>
                                <br />
                                <br />
                                <Row>
                                    <Col>Please Provide additional details below(1500 characters limit)</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FloatingLabel controlId="floatingTextarea2">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel></Col>
                                </Row>
                                <br />
                                <br />
                                <Row>
                                    <Col className="attachment">
                                        +Add an Attachment
                                        <Form.Control type="file" multiple /></Col>
                                </Row>
                                <Row>
                                    <Col>Maximum number of attachments:5 items Maximum File Size:25Mb
                                        Accepted File Types: JPEG,JPG,PNG,PPT,PPTX,CSV,DOCX
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>DOC,XLSX,XLS</Col>
                                </Row>
                                <br />
                                <br />
                                <Row>
                                    <Col>
                                        Would Like a Reply?</Col>
                                </Row>
                                <Row>
                                    <Col className="radiobox">
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="group1"
                                            type="radio"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <br/>
                        <br/>
                        <br/>
                        <div className="button2 mb-3">
                            <Button variant="danger" size="lg" active onClick= {this.onTrigger} className="mb-3">
                                Continue to Review
                            </Button>{' '}
                            <Button className="mb-3" variant="outline-dark" size="lg" inactive onClick= {this.OnPreview}>
                                Back
                            </Button>
                            {/* <Button variant="danger" className="p-2">
                Continue to comment
              </Button>{''}
              <Button  className="p-3" variant="light">Back</Button>{' '} */}
                        </div>
                    </Form>

                </div>
            </>
        )
    }
}
