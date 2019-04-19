import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';
import Slider, { Range } from 'rc-slider';
import { Redirect } from 'react-router-dom';


class SearchResults extends Component {
  componentDidMount(){
    console.log(this)
  }

  showResults = (e) => {

    if( this.props.results.length === 0 ) {
      return <Redirect to="/" />
    }

    let filterList = [...this.props.results].filter((data)=>{
      console.log(data)
      return ( 
          data.priceUSD > this.props.priceUSD && Number(data.departureTime.replace(':','')) > this.props.departureTime
          //String(data.priceUSD).includes(this.props.priceUSD)   && data.departureTime.includes(this.props.departureTime)

      )
    })
    console.log(filterList)

    return filterList.map((res,i)=>{
      return(
      <li key={i}>
        ${res.priceUSD}
        departureTime:{res.departureTime}
      </li>



      )
    })
  }


  render(){
    console.log(this.props.results.length)
    return(

      
      <div className="SearchResults">
      <Slider className="slider" max="200" name="priceUSD"  onChange={(e) => this.props.updateSearch(e, "priceUSD")}/>
     <span className="sliderText" >${this.props.priceUSD}</span> 

      <Slider className="slider"  min={0} step={100} max={2400} name="departureTime"  onChange={(e) => this.props.updateSearch(e, "departureTime")}/>
      <span className="sliderText" >Departure Time:{this.props.departureTime}</span>
      

        <ul>
          {this.showResults()}
        </ul>

       
      </div>

    )
  }
}

export  default SearchResults