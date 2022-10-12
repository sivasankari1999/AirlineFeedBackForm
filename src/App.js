//import logo from './logo.svg';
import React, { Component,} from 'react'
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import { Stepper, Step, StepLabel } from '@material-ui/core'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
class App extends React.Component {
  //console.log(currentStep);
  state = {
    currentStep: 1,
  }
  handleCallback = (childData) => {
    this.setState({ currentStep: childData })
  }
  showStep(step) {
    switch (step) {
      case 1:
        return <Page1 parentCallback={this.handleCallback}></Page1>
      case 2:
        return <Page2 parentCallback={this.handleCallback}></Page2>
      case 3:
        return <Page3 parentCallback={this.handleCallback}></Page3>
      case 4:
        return <Page4 ></Page4>
    }
  }
  render() {
    const { currentStep } = this.state;
    return (
      <div className="App">
        {/* <Header/> */}
        {/* <Page1 /> */}
        {/* <Page2/> */}
        {/* <Page3/>  */}
        {/* <Page4/> */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              Give a FeedBack / File a complaint
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <div className="center-stepper">
          <Stepper activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
              </StepLabel>
            </Step>
          </Stepper>
        </div>
        {this.showStep(currentStep)}
      </div>
    );
  }
}

export default App;
