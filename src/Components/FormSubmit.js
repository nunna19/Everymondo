import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchResults from'./SearchResults';
import queryString from 'query-string'
import {NotificationContainer, NotificationManager} from 'react-notifications';

class FromSunmit extends Component {

  constructor() {
    super();
    this.state = {
      results : [],
      departureTime:0,
      //priceUSD:'',
      priceUSD:0
    };
  }

  componentDidMount(){
    const values = queryString.parse(this.props.location.search)
    console.log(values) // "top"
    this.setState(values)
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    let {
      destination,
      origin,
      tripType,
      departureDate,
      returnDate,
      fareClass,
      passengerCount

    } = event.target

   
    let postObj = {
      destination : destination.value,
      origin : origin.value,
      tripType : tripType.value,
      departureDate : departureDate.value,
      returnDate : returnDate ? returnDate.value : '',
      fareClass : fareClass.value,
      passengerCount : Number(passengerCount.value)
    }


    console.log(this)


    axios.post("https://everymundointernship.herokuapp.com/search/BM88RE94IE35", postObj).then(res=>{
      console.log(res)
      // this.setState({
      //   results:res.data[0].routes
      // })

      this.props.setResults(res.data[0].routes)
      this.props.history.push('/Filter')

    }).catch(err => {
      
        console.log(err)
        NotificationManager.error(err.message)

    })
  
  };


 

  render(){
    console.log(this)
    return(
      <div className="popup"> 
        <div className="popup_inner"><Link to="/">XXXXXXX</Link>
        <form onSubmit={this.handleSubmit}>
                  {/* <FontAwesomeIcon icon = "times-circle" /> */}
              <div>
                <select defaultValue={this.state.tripType} className="tripType" name="tripType">
			            <option name="roundTrip" value="roundTrip">Round-trip</option>
			            <option name="oneWay" value="oneWay">One Way</option>
		            </select>
                <input type="number" name="passengerCount" min="1" max="5" defaultValue="1" ></input>
                  
              <select defaultValue={this.state.fareClass} name="fareClass">
			            <option value="Economy">Economy</option>
			            <option value="PremiumEconomy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="FirstClass">First Class</option>
		            </select>
                </div>

         
                <span>From</span>
        
                <select defaultValue={this.state.origin} name="origin">
                  <option value="MIA">MIA</option>
			            <option value="LAS">LAS</option>
                  <option value="DTW">DTW</option>
                  <option value="MCO">MCO</option>
                  <option  value="PHL">PHL</option>
                  <option value="RSW">RSW</option>
                  <option value="FLL">FLL</option> 
                  <option value="LGA">LGA</option>
		            </select>
              
                <span>To</span>
                <select defaultValue={this.state.destination} name="destination">
			            <option value="LAS">LAS</option>
			            <option value="MIA">MIA</option>
                  <option value="DTW">DTW</option>
                  <option value="MCO">MCO</option>
                  <option value="PHL">PHL</option>
                  <option value="RSW">RSW</option>
                  <option value="FLL">FLL</option> 
                  <option value="LGA">LGA</option>
		            </select>
       
        
                <span>Depart</span>
                <input defaultValue={this.state.departureDate} name="departureDate" type="date"  className="trip-start"  required/>

                { this.state.tripType == "roundTrip" ? 
                  <div>
                  <span>Return</span>
                  <input defaultValue={this.state.returnDate} name="returnDate" type="date"  className="trip-end"   required/>
                  </div>
                   :
                  ""
              
                }
 
                <span>Promo Code</span>
        
            
                <input type="submit" value="Search"/>
  
        </form>
        
        </div>
        <NotificationContainer/>
 
         {/* <SearchResults priceUSD={this.state.priceUSD} departureTime={this.state.departureTime} Results={this.showResults()} search={this.updateSearch}/> */}

       
      </div>

    )
  }
}

export  default FromSunmit