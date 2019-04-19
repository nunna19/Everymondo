import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import 'rc-slider/assets/index.css';

import './App.scss';
import Home from './Components/Home.js';
import FormSubmit from './Components/FormSubmit';
import SearchResults from './Components/SearchResults';





class App extends Component {

  state={
    //empty
    results: [],
    departureTime: 0,
    priceUSD:0
  }

  setResults = (results) => {
    this.setState({ results })
  }
  updateSearch = (e, name) => {
    console.log(e, name)
    this.setState({
      [name]:String(e)
    })
  }
  render() {
    console.log('how???')
    return (
      <div className="App">

      <Switch>
          <Route
            exact path='/'
            render={(props) => <Home {...props} />}
          />
          <Route
            exact path='/FormSubmit'
            render={(props) => <FormSubmit {...props} setResults={this.setResults} />}
          />
           <Route
            exact path='/Filter'  
            render={(props) => <SearchResults {...props} {...this.state} updateSearch={this.updateSearch}/>}
          />
      </Switch>

      {/* <Home/> */}
      
        
      </div>
    );
  }
}

export default App;
