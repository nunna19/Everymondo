import React, { Component } from 'react';
import './App.scss';
import Home from './Components/Home.js';
import FormSubmit from './Components/FormSubmit';


class App extends Component {
  render() {
    return (
      <div className="App">

     <FormSubmit/>
    
      <Home/>
      
        
      </div>
    );
  }
}

export default App;
