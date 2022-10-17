import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header3 from '../HeaderComp/Header3'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button'
import "./ThirdPage.css"
import Form from 'react-bootstrap/Form';
export default class Page3 extends Component {
  onTrigger = (event) => {
    this.props.parentCallback(4);
    event.preventDefault();
  }
  OnPreview = (event) => {
    this.props.parentCallback(2);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Header3 />
        <br />
        <br />
        <Form onSubmit={this.onTrigger}>
          <Card className="fulltext">
            <Container>
              <Row>
                <Col>
                  Year Experience
                </Col>
                <Col>
                  What is your feedback about?
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="">Edit</a>
                </Col>
                <Col>
                  Give a Compliment
                  <br />
                  * Airline Experience</Col>
              </Row>
            </Container>
          </Card>
          <br />
          <br />
          <br />
          <Card className="fulltext">
            <Container>
              <Row>
                <Col>
                  Personal Information
                </Col>
                <Col>
                  Coco OLive
                </Col>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="">Edit</a>
                </Col>
                <Col>
                  Contact Information
                </Col>
                <Col>
                  Airline Program</Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>
                <div className="details">
                  {this.props.FormDatapage1[0].num}
                  <br />
                  {this.props.FormDatapage1[0].email}
                  </div>
                </Col>
                <Col>
                <div className="details">
                 {this.props.FormDatapage1[0].selectedAirline}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>Address
                </Col>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col><div className="details">
                  {this.props.FormDatapage1[0].address1}<br/>
                  {this.props.FormDatapage1[0].address2}<br/>
                  {this.props.FormDatapage1[0].city}<br/>
                  {this.props.FormDatapage1[0].postalCode}<br/>
                  {this.props.FormDatapage1[0].region}<br/>
                  {this.props.FormDatapage1[0].country}<br/>
                  </div>
                </Col>
                <Col>
                </Col>
              </Row>
            </Container>
          </Card>
          <br />
          <br />
          <br />
          <Card className="fulltext">
            <Container>
              <Row>
                <Col>Comment Details</Col>
                <Col>Flight Information</Col>
                <Col>Comment</Col>
              </Row>
              <Row>
                <Col>
                  <a href="">Edit</a>
                </Col>
                <Col>
                <div className="details">
                  {this.props.FormDatapage1[0].selectedAirline}
                </div>
                </Col>
                <Col>
                  <div className="details">
                  {this.props.FormDatapage2[0].comment}
                </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                </Col>
                <Col>Frequent Flyer Number
                </Col>
                <Col>Attachments</Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col> <div className="details">
                  {this.props.FormDatapage1[0].FlyerNumber}
                </div></Col>
                <Col> <div className="details">
                  {this.props.FormDatapage2[0].filearray[0].name}
                </div>
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>Ticket Number</Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>
                <div className="details">
                  {this.props.FormDatapage2[0].ticketnum}
                </div></Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>Would you like a reply?</Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>
                <div className="details">
                  {this.props.FormDatapage2[0].group1}
                </div></Col>
                <Col></Col>
              </Row>

            </Container>
          </Card>
          <Container className="mt-3">
            <Row>
              <Col>By submitting this form,I understand that my <br />
                personal information will be processed in <br />
                accordance with Airline policy
              </Col>
              <Col>
                <div className="button2 mb-3">
                  <Button variant="danger" size="lg" type="submit"
                    className="mb-3">
                    Confirm and Submit
                  </Button>{' '}
                  <Button variant="outline-dark" size="lg"
                    className="mb-3" inactive onClick={this.OnPreview}>
                    Back
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      </>
    )
  }
}
