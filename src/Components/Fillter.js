import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';
import Slider, { Range } from 'rc-slider';



class Fillter extends Component {

  render(){
    return(
      <div className="Fillter">
      <Slider name="priceUSD"  onChange={(e) => this.props.search(e, "priceUSD")}/>
      ${this.props.priceUSD}

      <Slider min={0} step={100} max={2400} name="departureTime"  onChange={(e) => this.props.search(e, "departureTime")}/>

      {this.props.departureTime}

        <input name="priceUSD" type="text"  onChange={this.props.search}/>
        <input name="departureTime" type="text"  onChange={this.props.search}/>
        <ul>
          {this.props.Results}
        </ul>

       
      </div>

    )
  }
}

export  default Fillter