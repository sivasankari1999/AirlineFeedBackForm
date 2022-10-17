//import logo from './logo.svg';
import React, { Component, } from 'react'
import './App.css';
import StepNavigation from './components/StepNavigation';
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
       <StepNavigation></StepNavigation>
      </div>
    );
  }
}

export default App;
