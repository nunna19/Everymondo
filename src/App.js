import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import 'rc-slider/assets/index.css';

import './App.scss';
import Home from './Components/Home.js';
import FormSubmit from './Components/FormSubmit';





class App extends Component {
  render() {
    console.log('how???')
    return (
      <div className="App">

      <Switch>
          <Route
            path='/FormSubmit'
            render={(props) => <FormSubmit {...props} setUser={this.setUser}/>}
          />
      </Switch>

      <Home/>
      
        
      </div>
    );
  }
}

export default App;
