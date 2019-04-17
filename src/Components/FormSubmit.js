import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';


class FromSunmit extends Component {

  handleSubmit = (event) => {
    event.preventDefault() 
    let {
      destination,
      origin,
      tripType,
      departureDate,
      returnDate,
      fareClass,
      Passenger,
      Promotion
    } = event.target


    let postObj = {
      destination : destination.value,
      origin : origin.value,
      tripType : tripType.value,
      departureDate : departureDate.value,
      returnDate : returnDate.value,
      fareClass : fareClass.value,
      Passenger : Passenger.value,
      Promotion : Promotion.value
    }
    console.log(postObj);

    axios.post("https://everymundointernship.herokuapp.com/search/BM88RE94IE35" , postObj).then(res=>{
      console.log(res)
    }).catch(err => console.log(err) )
  
  };

  render(){
    return(
      <div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td style={{width: "20px"}}>
                <select name="tripType">
			            <option name="roundTrip" value="RoundTrip">Round-trip</option>
			            <option name="oneWay" value="OneWay">One Way</option>
		            </select>
                </td>
                <td>
                <select name="Passenger">
			            <option  value="Passenger">1  Passenger</option>
		            </select>
              </td>
              <td>
              <select name="fareClass">
			            <option value="Economy">Economy</option>
			            <option value="PremiumEconomy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="FirstClass">First Class</option>
		            </select>
              </td>
            </tr>
            <tr>
              <td>
                <span>From</span>
              </td>
              <td>
                <span>To</span>
              </td>
           </tr>
           <tr>
              <td>
                <input type="text" name="destination" placeholder="Room Search..." onChange={this.updateSearch}/>
              </td>
              <td>
                <input type="text" name="origin" placeholder="Room Search..." onChange={this.updateSearch}/>
              </td>
           </tr>
           <tr>
              <td>
                <span>Depart</span>
              </td>
              <td>
                <span>Return</span>
              </td>
           </tr>
           <tr>
              <td>
                <input name="departureDate" type="date"  className="trip-start" min="2019-01-01" max="2019-12-31" />
              </td>
              <td>
                <input name="returnDate" type="date"  className="trip-end" min="2019-01-01" max="2019-12-31"/>
              </td>
           </tr>
           <tr>
              <td>
                <span>Promo Code</span>
              </td>
           </tr>
           <tr>
              <td>
                <input name="Promotion" type="text"  onChange={this.updateSearch}/>
              </td>
              <td>
                <input type="submit" value="Submit"/>
              </td>
           </tr>
        </table>
        </form>
        </div>
        
      </div>

    )
  }
}

export  default FromSunmit