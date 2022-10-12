import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Header3 from './Header3'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button'
import "./Page3.css"
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
        <br/>
        <br/>
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
              <Col>Address
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
              </Col>
              <Col>
                Giving feedback</Col>
            </Row>
            <br />
            <Row>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>Attachments</Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>Flight Number</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col></Col>
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
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>Would you like a reply?</Col>
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
                className="mb-3"  active onClick= {this.onTrigger}>
                  Confirm and Submit
                </Button>{' '}
                <Button variant="outline-dark" size="lg" 
                className="mb-3" inactive onClick= {this.OnPreview}>
                  Back
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

      </>
    )
  }
}
