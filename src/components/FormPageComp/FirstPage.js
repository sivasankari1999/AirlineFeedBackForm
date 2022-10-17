import React, { Component, useState } from 'react'
import Header1 from "../HeaderComp/Header1"
import './FirstPage.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Button from 'react-bootstrap/Button';
import axios from "axios";
export default class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      /*-------------------form fields----------------------*/
      num: '',
      country: '',
      region: '',
      airlines: ["Indigo Airlines", "SpiceJet Airways", "Air India Express", "Delta Airlines/SkyMiles"],
      selectedAirline: '',
      FlyerNumber: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      postalCode: '',
      formData1: {},
      timer: null,
      errormsg:"",
      /*--------------form error messages----------------*/
      airlines_err_mess: '',
      first_name_err_mess: '',
      last_name_err_mess: '',
      email_err_mess: '',
      address1_err_mess: '',
      city_err_mess: '',
      postalCode_err_mess: '',
      /*-------------------form flag -----------------------*/
      airlines_flag: false,
      first_name_flag: false,
      last_name_flag: false,
      email_flag: false,
      address1_flag: false,
      city_flag: false,
      postalCode_flag: false,
      formStatus: false
    };
  }
  onTrigger = async(event) => {
    event.preventDefault();
    let { formStatus,errormsg } = this.state;
    let formData1 = this.state;
    console.log(formData1);
    console.log(formStatus);
    if (formStatus == true) {
      this.props.parentCallback(2);
      this.props.createPage1(formData1);
      const url = "http://localhost:3001/page1";
      axios
        .post(url,formData1 )
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
  componentDidMount() {
    console.log("from componentDidupdate of Form");
    console.log("props:", this.props.FormDatapage1);
    console.log(this.props.FormDatapage1.first_name);
    this.setState({ formStatus: true })
    let formDataInfo = this.props.FormDatapage1
    this.state.timer = setTimeout(() => {
      this.setState({
        country: formDataInfo[0].country,
        num: formDataInfo[0].num,
        region: formDataInfo[0].region,
        selectedAirline: formDataInfo[0].selectedAirline,
        FlyerNumber: formDataInfo[0].FlyerNumber,
        first_name: formDataInfo[0].first_name,
        middle_name: formDataInfo[0].middle_name,
        last_name: formDataInfo[0].last_name,
        email: formDataInfo[0].email,
        address1: formDataInfo[0].address1,
        address2: formDataInfo[0].address2,
        city: formDataInfo[0].city,
        postalCode: formDataInfo[0].postalCode,
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }
  numchangeHandler = (val) => {
    this.setState({ num: val })
  }
  selectCountry = (val) => {
    this.setState({ country: val });
  }
  selectRegion = (val) => {
    this.setState({ region: val });
  }
  onChangeHandler = (event) => {
    //console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value })
  }
  Validations = (e) => {
    let { airlines_flag, first_name_flag, last_name_flag,
      num_flag, email_flag, address1_flag, city_flag, postalCode_flag, formStatus } = this.state;
    console.log("from Validations");
    console.log(e.target.name);
    /*-----------------------------------Select Airlines validation-----------------------------------------------*/
    if (e.target.name == "selectedAirline") {
      let { selectedAirline, airlines, airlines_err_mess } = this.state;
      console.log(selectedAirline);
      if (selectedAirline == "" || selectedAirline == "Select") {
        airlines_err_mess = "Please Select the Airlines"
        airlines_flag = false
      }
      else {
        airlines_err_mess = ""
        airlines_flag = true
      }
      this.setState({ selectedAirline, airlines_err_mess, airlines_flag })
    }
    /*--------------------------------------firstname validation-------------------------------------------------*/
    if (e.target.name === "first_name") {
      let { first_name, first_name_err_mess } = this.state;
      if (first_name == undefined || first_name.length == 0) {
        first_name_err_mess = "Please Enter the First Name."
      }
      else {
        console.log("First Name: ", first_name);
        console.log("Name Length: ", first_name.length);
        let nameReg = /^([a-zA-Z ]{5,30})$/
        if (!nameReg.test(first_name)) {
          first_name_err_mess = "Accepts Alphabets,space & Min 5 to Max 30 char"
        }
        else {
          first_name_err_mess = ""
        }
        console.log(nameReg.test(first_name));
      }
      if (first_name_err_mess) {
        e.target.classList.add("field-error")
        first_name_flag = false

      } else {
        e.target.classList.remove("field-error")
        first_name_flag = true
      }
      this.setState({ first_name_err_mess, first_name_flag })
    }
    /*-----------------------------------------lasttname validation-------------------------------------------------*/
    if (e.target.name === "last_name") {
      let { last_name, last_name_err_mess } = this.state;
      if (last_name == undefined || last_name.length == 0) {
        last_name_err_mess = "Please Enter the Last Name."
      }
      else {
        console.log("Last Name: ", last_name);
        console.log("Name Length: ", last_name.length);
        let nameReg = /^([a-zA-Z]{1,30})$/
        if (!nameReg.test(last_name)) {
          last_name_err_mess = "Accepts Alphabets & Min 1 to Max 30 char"
        }
        else {
          last_name_err_mess = ""
        }
        console.log(nameReg.test(last_name));
      }
      if (last_name_err_mess) {
        e.target.classList.add("field-error")
        last_name_flag = false

      } else {
        e.target.classList.remove("field-error")
        last_name_flag = true
      }
      this.setState({ last_name_err_mess, last_name_flag })
    }
    /*-------------------------------------------phone num validations---------------------------------------------------*/
    if (e.target.name === "num") {
      let { num, num_err_mess } = this.state;
      if (num == undefined || num.length == 0) {
        num_err_mess = "Please select the country & Enter the Phone Number."
        num_flag = false
      }
      else {
        num_err_mess = ""
        num_flag = true
      }
      this.setState({ num, num_err_mess, num_flag })
    }
    /*------------------------------------------Email valiidation---------------------------*/
    if (e.target.name === "email") {
      let { email, email_err_mess } = this.state;
      if (email == undefined || email.length == 0) {
        email_err_mess = "Please Enter the Email Id."
        email_flag = false
      }
      else if (email.indexOf("@") === -1) {
        email_err_mess = "Please Enter the valid Email Id."
        email_flag = false
      }
      else {
        email_err_mess = ""
        email_flag = true
      }
      this.setState({ email, email_err_mess, email_flag })
    }
    /*--------------------------------------------Address1 Validations---------------------------------------------*/
    if (e.target.name === "address1") {
      let { address1, address1_err_mess } = this.state;
      if (address1 == undefined || address1.length == 0) {
        address1_err_mess = "Please enter the address1"
        address1_flag = false
      }
      else {
        address1_err_mess = ""
        address1_flag = true
      }
      this.setState({ address1_flag, address1_err_mess, address1 })
    }
    /*------------------------------------------City Validations---------------------------------*/
    if (e.target.name == "city") {
      let { city, city_err_mess } = this.state;
      if (city == undefined || city.length == 0) {
        city_err_mess = "Please enter the city"
        city_flag = false
      }
      else {
        city_err_mess = ""
        city_flag = true
      }
      this.setState({ city, city_err_mess, city_flag })
    }
    /*----------------------------------------------Postal Code------------------------------------*/
    if (e.target.name == "postalCode") {
      let { postalCode, postalCode_err_mess } = this.state;
      if (postalCode == undefined || postalCode.length == 0) {
        postalCode_err_mess = "Please enter the postal Code"
        postalCode_flag = false
      }
      else {
        postalCode_err_mess = ""
        postalCode_flag = true
      }
      this.setState({ postalCode, postalCode_err_mess, postalCode_flag })
    }
    /*------------------------------------------------form status-----------------------------------------------------*/
    if (airlines_flag && first_name_flag && last_name_flag && num_flag && email_flag
      && address1_flag && city_flag && postalCode_flag
    ) {
      formStatus = true
    }
    else {
      formStatus = false
    }
    this.setState({ formStatus });
  }
  canBeSubmitted() {
    let { airlines_err_mess, first_name_err_mess, last_name_err_mess, num_err_mess, email_err_mess,
      address1_err_mess, city_err_mess, postalCode_err_mess } = this.state;

    return airlines_err_mess == "" && first_name_err_mess == "" && last_name_err_mess == ""
      && num_err_mess == "" && email_err_mess == "" && address1_err_mess == "" && city_err_mess == ""
      && postalCode_err_mess == ""
  }
  render() {
    let isEnabled = this.canBeSubmitted();
    let { country, region, num, selectedAirline, airlines, FlyerNumber,
      first_name, last_name, middle_name, email, address1, address2, city, postalCode } = this.state;
    let { airlines_err_mess, first_name_err_mess, last_name_err_mess,
      num_err_mess, email_err_mess, address1_err_mess, city_err_mess, postalCode_err_mess } = this.state
    return (
      <>
        <Header1 />
        <br />
        <Container>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        {/*-----------------------------------------Card content starts here--------------------------------------------------*/}
        <div className="maincontainer">
          <Form onSubmit={this.onTrigger}>
            <Card>
              <Card.Header>Are You a Skylines Member?<a className="Logintag">Login</a> So we can help you faster</Card.Header>
              <Container>
                <Row>
                  <Col></Col>
                  <Col className="text-end sideText">All Fields are required unless noted</Col>
                </Row>
                <Row>
                  <Col className="text-start">Please make sure your Full Name is entered exactly
                    as it appears on your government issued Id</Col>
                </Row>
                <Row>
                  <Col className="text-start"> (example:Jane Elizabeth Doe)</Col>
                </Row>
                <br />
                {/*---------------------------------Form starts here -first line-----------------------------------*/}
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Airline program (optional)"
                    >
                      <Form.Select aria-label="Floating label select example" onChange={this.onChangeHandler}
                        value={selectedAirline} name="selectedAirline" onBlur={this.Validations}>
                        <option value="Select">Select</option>
                        {airlines.map((selectedAirline, ind) => {
                          return <option value={selectedAirline} key={ind}>{selectedAirline}</option>
                        })
                        }
                      </Form.Select>
                    </FloatingLabel>
                    {
                      airlines_err_mess &&
                      <p className="text-danger">{airlines_err_mess}</p>
                    }
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Frequent FlyerNumber (optional)">
                      <Form.Control type="text" name="FlyerNumber" value={FlyerNumber} onChange={this.onChangeHandler}
                        placeholder="Frequent FlyerNumber (optional)" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <br />
                {/*------------------------------------------form second line-----------------------------------------*/}
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
                      <Form.Control type="text" onChange={this.onChangeHandler} name="first_name"
                        value={first_name}
                        onBlur={this.Validations} placeholder="First Name" />
                    </FloatingLabel>
                    {first_name_err_mess &&
                      <p className="text-danger">{first_name_err_mess}</p>
                    }
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingMiddleName" label="Middle Name" className="mb-3">
                      <Form.Control type="text" name="middle_name"
                        value={middle_name} onChange={this.onChangeHandler} placeholder="Middle Name" />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
                      <Form.Control type="text" onChange={this.onChangeHandler} name="last_name"
                        value={last_name}
                        onBlur={this.Validations} placeholder="Last Name" />
                    </FloatingLabel>
                    {last_name_err_mess &&
                      <p className="text-danger">{last_name_err_mess}</p>
                    }
                  </Col>
                </Row>
                <br />
                {/*----------------------------------------form third line----------------------------------------------*/}
                <Row className="g-2">
                  <Col md>
                    <PhoneInput
                      className="phone form-control mb-3"
                      placeholder="Enter phone number" name="num"
                      value={num} onBlur={this.Validations}
                      onChange={(val) => this.numchangeHandler(val)} />
                    {num_err_mess &&
                      <p className="text-danger">{num_err_mess}</p>
                    }
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control type="email" name="email" value={email}
                        onBlur={this.Validations} onChange={this.onChangeHandler} placeholder="name@example.com" />
                    </FloatingLabel>
                    {email_err_mess &&
                      <p className="text-danger">{email_err_mess}</p>
                    }
                  </Col>
                </Row>
                {/*-------------------------------------------form fourth line---------------------------------------*/}
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Select Country"
                      className="mb-3"
                    >
                      <CountryDropdown
                        className=" form-control mb-3"
                        value={country}
                        onChange={(val) => this.selectCountry(val)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Address 1"
                      className="mb-3"
                    >
                      <Form.Control type="text" onChange={this.onChangeHandler}
                        name="address1" value={address1} onBlur={this.Validations} placeholder="Address1" />
                    </FloatingLabel>
                    {address1_err_mess &&
                      <p className="text-danger">{address1_err_mess}</p>
                    }
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Address 2(optional)"
                      className="mb-3"
                    >
                      <Form.Control type="text" onChange={this.onChangeHandler}
                        name="address2" value={address2} placeholder="Address2(optional)" />
                    </FloatingLabel>
                  </Col>
                </Row>
                {/*------------------------fifth line of form-------------*/}
                <Row>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="City"
                      className="mb-3"
                    >
                      <Form.Control type="text" onChange={this.onChangeHandler}
                        value={city} name="city" onBlur={this.Validations} placeholder="City" />
                    </FloatingLabel>
                    {city_err_mess &&
                      <p className="text-danger">{city_err_mess}</p>
                    }
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Select State /Province"
                      className="mb-3"
                    >
                      <RegionDropdown
                        className="form-control"
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Postal Code"
                      className=""
                    >
                      <Form.Control type="text" onChange={this.onChangeHandler} onBlur={this.Validations}
                        name="postalCode" value={postalCode} placeholder="Postal Code" />
                    </FloatingLabel>
                    {postalCode_err_mess &&
                      <p className="text-danger">{postalCode_err_mess}</p>
                    }
                  </Col>
                </Row>
              </Container>
            </Card>
            <div className="button mt-3">
              <div className="row">
                <div className="col-auto">
                  <Button variant="danger" size="lg" type="submit"
                    className="button1 mb-3" >
                    Continue to Comment
                  </Button>
                </div>
                <div className="col-auto">
                  <Button variant="outline-dark" size="lg" className="button2- mb-3">
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </>
    )
  }
}

