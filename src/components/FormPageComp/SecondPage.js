import React, { Component } from 'react'
import Header2 from "../HeaderComp/Header2";
import "./SecondPage.css"
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { FcInfo } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import axios from "axios";
export default class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationnum: '',
            ticketnum: '',
            comment: '',
            filename: '',
            group1:'',
            formData2:[],
            errormsg:"",
            /*--------errors------*/
            comment_err_mess: '',
            file_err_mess: '',
            reply_err_mess: '',
            /*------------flags----*/
            comment_flag: false,
            file_flag: false,
            reply_flag: false,
            formStatus2: false
        }
    }
    onChangeHandler = (event) => {
        //console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value })
    }
    onTrigger = async (event) => {
        event.preventDefault();
        let { formStatus2,errormsg } = this.state
        let currentformData2 = this.state
        console.log(currentformData2);
        if (formStatus2 == true) {
            this.props.parentCallback(3);
            this.props.previousPage(currentformData2)
            const url = "http://localhost:3001/page2";
            axios
              .post(url,currentformData2 )
              .then((res) => {
                console.log("res.data: ", res.data);
                alert(res.data.message);
              })
              .catch((err) => {
                if (err.response) {
                  console.log(err);
                  console.log("err.response: ", err.response);
                  console.log("err.response.ok: ", err.response.ok);
                  console.log("err.response.data: ", err.response.data);
                  this.setState({errormsg:err.response.data.message});
                  console.log(errormsg);
                }
              });
             this.setState({errormsg:""})
          }
    }
    OnPreview = (event) => {
        this.props.parentCallback(1);
        event.preventDefault();
    }
    async componentDidMount() {
        let {formData2}  =this.state
        const users = await axios.get("http://localhost:3001/page2");
        console.log(users.data.formList[users.data.formList.length-1]);
        formData2.push(users.data.formList[users.data.formList.length-1])
        console.log(formData2);
        this.setState({ formStatus: true })
        this.setState({
                comment: formData2[0].comment,
                confirmationnum: formData2[0].confirmationnum,
                ticketnum: formData2[0].ticketnum,
                group1: formData2[0].group1,
                filename: formData2[0].filename,
              })
      }
    fileChangeHandler = (event) => {
        // console.log(event.target.files);
        if (event.target.files.length == 0) {
            console.log("No file is Selected");
            return;
        }
        let filename = event.target.files;
        let filearray = [];
        console.log("File: ", filename);
        for (let i = 0; i < filename.length; i++)
            filearray[i] = filename[i]
        this.setState({ filename:filearray[0].name, filearray });
        console.log(filearray);
    }
    Validations = (e) => {
        let { comment_flag, file_flag, reply_flag, formStatus2 } = this.state;
        console.log("from Validations");
        console.log(e.target.name);
        /*---------------------------------comment validations--------------*/
        if (e.target.name == "comment") {
            let { comment, comment_err_mess } = this.state;
            if (comment == undefined || comment.length == 0) {
                comment_err_mess = "Please Enter the details"
                comment_flag = false
            }
            else {
                comment_err_mess = ""
                comment_flag = true
            }
            this.setState({ comment_flag, comment, comment_err_mess })
        }
        /*---------------------------file validation--------------------*/
        let { file_err_mess } = this.state;
        if (e.target.name == "filename") {
            let filename = e.target.files;
            if (filename == undefined || filename.length == 0) {
                file_err_mess = "Please upload the file"
            }
            else {
                file_err_mess = ""
            }
            if (file_err_mess) {
                e.target.classList.add("field-error")
                file_flag = false
            } else {
                e.target.classList.remove("field-error")
                file_flag = true
            }
            this.setState({ file_err_mess, file_flag })
        }
        if (comment_flag && file_flag) {
            formStatus2 = true
        }
        else {
            formStatus2 = false
        }
        this.setState({ formStatus2 });
    }
    canBeSubmitted() {
        let { comment_err_mess, file_err_mess } = this.state;
        return comment_err_mess == "" && file_err_mess == ""
    }
    render() {
        let isEnabled = this.canBeSubmitted();
        let { ticketnum, confirmationnum, comment, filename } = this.state;
        let { comment_err_mess, file_err_mess, reply_err_mess } = this.state
        return (
            <>
                <Header2 />
                <div className="maincontainer">
                    <Form onSubmit={this.onTrigger}>
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
                                <br/>
                                <Row>
                                    <Col md>
                                        Fullname:
                                    </Col>
                                </Row>
                                <Row className='g-2'>
                                    <Col md>
                                        <div className="form-control mt-3">
                                            {this.props.FormDatapage1[0].first_name +
                                            this.props.FormDatapage1[0].middle_name + this.props.FormDatapage1[0].last_name}
                                        </div>
                                    </Col>
                                    <Col md>
                                    <div className="form-control mt-3">
                                            <input type="text" value={confirmationnum} name="confirmationnum"
                                                onChange={this.onChangeHandler} placeholder="Confirmation#" />
                                        </div>
                                    </Col>
                                    <Col className="info">
                                        <FcInfo></FcInfo>
                                    </Col>
                                    <Col md>
                                        <div className="form-control mt-3">
                                            <input type="text" value={ticketnum} name="ticketnum"
                                                onChange={this.onChangeHandler} placeholder="Ticket#" />
                                        </div>
                                    </Col>
                                    <Col className="info">
                                        <FcInfo></FcInfo>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3 checkboxx" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I don't have any Confirmation# and/or Ticket#" />
                                </Form.Group>
                                <br />
                                <Button href="https://www.makemytrip.com/flights/flight-status.htm" size='md' variant="outline-dark" className="lookbut">
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
                                                as="textarea" value={comment} name="comment" onChange={this.onChangeHandler}
                                                placeholder="Leave a comment here" onBlur={this.Validations}
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>
                                        {comment_err_mess &&
                                            <p className="text-danger">{comment_err_mess}</p>

                                        }</Col>
                                </Row>
                                <br />
                                <br />
                                <Row>
                                    <Col className="attachment">
                                        +Add an Attachment
                                        <Form.Control type="file" multiple onChange={this.fileChangeHandler}
                                            onBlur={this.Validations} name="filename" />
                                        {
                                            file_err_mess &&
                                            <p className="text-danger">{file_err_mess}</p>
                                        }
                                    </Col>
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
                                            name="group1" value="yes" onChange={this.onChangeHandler}
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="group1" value="no" onChange={this.onChangeHandler}
                                            type="radio"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <br />
                        <br />
                        <br />
                        <div className="button2 mb-3">
                            <Button variant="danger" size="lg" type="submit" className="mb-3">
                                Continue to Review
                            </Button>{' '}
                            <Button className="mb-3" variant="outline-dark" size="lg" onClick={this.OnPreview}>
                                Back
                            </Button>
                        </div>
                    </Form>
                </div>
            </>
        )
    }
}
