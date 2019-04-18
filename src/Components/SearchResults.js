import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';


class SearchResults extends Component {

  render(){
    return(
      <div className="SearchResults">

        <input name="priceUSD" type="text"  onChange={this.props.search}/>
        <input name="departureTime" type="text"  onChange={this.props.search}/>
        <ul>
          {this.props.Results}
        </ul>

       
      </div>

    )
  }
}

export  default SearchResults