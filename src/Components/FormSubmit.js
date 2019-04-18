import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';
import SearchResults from'./SearchResults';

class FromSunmit extends Component {

  constructor() {
    super();
    this.state = {
      results : [],
      departureTime:'',
      priceUSD:''
    };
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
      returnDate : returnDate.value,
      fareClass : fareClass.value,
      passengerCount : Number(passengerCount.value)
    }
    console.log(postObj);////work

    axios.post("https://everymundointernship.herokuapp.com/search/BM88RE94IE35", postObj).then(res=>{
      console.log(res)
      this.setState({
        results:res.data[0].routes
      })
    }).catch(err => console.log(err) )
  
  };

  showResults = (e) => {
    let filterList = [...this.state.results].filter((data)=>{
     
      return ( 
          String(data.priceUSD).includes(this.state.priceUSD)   && data.departureTime.includes(this.state.departureTime)
 )
 })


    return filterList.map((res,i)=>{
      return(
      <li key={i}>
        ${res.priceUSD}
        departureTime:{res.departureTime}
      </li>

      )
    })
  }

  updateSearch = (e) => {

    this.setState({
      [e.target.name]:String(e.target.value)
    })
  }

 

  render(){
    return(
      <div className="popup">
        <div className="popup_inner">
        <button onClick={this.props.closePopup}>close me</button>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td style={{width: "20px"}}>
                <select name="tripType">
			            <option name="roundTrip" value="roundTrip">Round-trip</option>
			            <option name="oneWay" value="oneWay">One Way</option>
		            </select>
                </td>
                <td>

                <input type="number" name="passengerCount" min="1" max="5" defaultValue="1" ></input>
             

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
                
                <select name="origin">
                <option value="MIA">MIA</option>
			            <option value="LAS">LAS</option>
                  <option value="DTW">DTW</option>
                  <option value="MCO">MCO</option>
                  <option value="PHL">PHL</option>
                  <option value="RSW">RSW</option>
                  <option value="FLL">FLL</option> 
                  <option value="LGA">LGA</option>
		            </select>
              </td>
              <td>
                
                <select name="destination">
			            <option value="LAS">LAS</option>
			            <option value="MIA">MIA</option>
                  <option value="DTW">DTW</option>
                  <option value="MCO">MCO</option>
                  <option value="PHL">PHL</option>
                  <option value="RSW">RSW</option>
                  <option value="FLL">FLL</option> 
                  <option value="LGA">LGA</option>
		            </select>
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
                <input name="departureDate" type="date"  className="trip-start" min="2019-01-01" max="2019-12-31" defaultValue="2019-04-28" required/>
              </td>
              <td>
                <input name="returnDate" type="date"  className="trip-end" min="2019-01-01" max="2019-12-31" defaultValue="2019-05-31" required/>
              </td>
           </tr>
           <tr>
              <td>
                <span>Promo Code</span>
              </td>
           </tr>
           <tr>
              <td>
              
              </td>
              <td>
                <input type="submit" value="Search"/>
              </td>
           </tr>
        </table>
        </form>
        
        </div>

         <SearchResults Results={this.showResults()} search={this.updateSearch}/>

       
      </div>

    )
  }
}

export  default FromSunmit