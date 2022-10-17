import React, { Component } from 'react'
import "../App.css"
import { Stepper, Step, StepLabel } from '@material-ui/core'
import FirstPage from "../components/FormPageComp/FirstPage"
import SecondPage from "../components/FormPageComp/SecondPage"
import ThirdPage from "../components/FormPageComp/ThirdPage"
import FinalPage from "../components/FormPageComp/FinalPage"
import NavComp from './NavComp'
export default class StepNavigation extends Component {
    constructor(props) {
        super(props)
        //console.log(currentStep);
        this.state = {
            currentStep: 1,
            FormDatapage2: [],
            FormDatapage1: []
        }
    }
    handleCallback = (childData) => {
        this.setState({ currentStep: childData })
    }
    Formpage1 = (value) => {
        let { FormDatapage1 } = this.state
        FormDatapage1.push(value);
        console.log(FormDatapage1);
        this.setState({ FormDatapage1 })
    }
    FormPage2 = (value) => {
        //console.log(value);
        let { FormDatapage2 } = this.state
        FormDatapage2.push(value);
        console.log(FormDatapage2);
        this.setState({ FormDatapage2 })
    }
    showStep(step) {
        switch (step) {
            case 1:
                return <FirstPage parentCallback={this.handleCallback} createPage1={this.Formpage1} FormDatapage1={this.state.FormDatapage1}
                ></FirstPage>
            case 2:
                return <SecondPage parentCallback={this.handleCallback} FormDatapage1={this.state.FormDatapage1}
                    previousPage={this.FormPage2} FormDatapage2={this.state.FormDatapage2}
                ></SecondPage>
            case 3:
                return <ThirdPage parentCallback={this.handleCallback} FormDatapage1={this.state.FormDatapage1}
                    FormDatapage2={this.state.FormDatapage2} ></ThirdPage>
            case 4:
                return <FinalPage ></FinalPage>
        }
    }
    render() {
        const { currentStep } = this.state;
        return (
            <> 
            <NavComp></NavComp>
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
            </>
        )
    }
}
