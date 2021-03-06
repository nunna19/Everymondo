import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';
import queryString from 'query-string'
import {NotificationContainer, NotificationManager} from 'react-notifications';

class FromSunmit extends Component {

  constructor() {
    super();
    this.state = {
   
    };
  }

  componentDidMount(){
    const values = queryString.parse(this.props.location.search)// value from the link veiwDeal 
    console.log(values) 
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
   


    axios.post("https://everymundointernship.herokuapp.com/search/BM88RE94IE35", postObj).then(res=>{
     
      this.props.setResults(res.data[0].routes)
      console.log("...go to info want to fillter ",res)
      this.props.history.push('/Filter')

    }).catch(err => {
      
        console.log(err)
        NotificationManager.error(err.message)

    })
  
  };
  tripType = () =>{
    if(this.state.tripType !== "roundTrip" ){
      return  <option name="oneWay" value="oneWay">One Way</option>
    }else{
      return <option name="roundTrip" value="roundTrip">Round-trip</option>
    }
  }

 

  render(){
    console.log(this)
   
    return(
      <div className="popup"> 
        <div className="popup_inner">

       

        <div className="inner">
        <div className="back-btn" ><Link className="back" to="/Deal">X</Link></div>
        <form onSubmit={this.handleSubmit}>
                 
              <div className="HomeForm1" >
              
                <select defaultValue={this.state.tripType} className="tripType" name="tripType">
			            {this.tripType()}
		            </select>
                
                  
              <select className="fareClass" defaultValue={this.state.fareClass} name="fareClass"  >
			            <option value="Economy">Economy</option>
			            <option value="PremiumEconomy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="FirstClass">First Class</option>
		            </select>

                <span className="passenger" >passenger:<input  type="number" name="passengerCount" min="1" max="5" defaultValue="1" ></input></span>

                </div>

         
                <div className="Flight ">
                <input defaultValue={this.state.origin} name="origin" type ="text"/>
              
		              <img className="iconRoundTrip" src="./roundTrip.png"/> 
              
               
                <input defaultValue={this.state.destination} name="destination" type ="text"/>
			        </div>
       
              <br/>

              <div>
              <img src="./depart1.png" className="iconDepartImg" />
                <input defaultValue={this.state.departureDate} name="departureDate" type="date"  className="trip-start"  required/>
                </div>
              <div>
                { this.state.tripType == "roundTrip" ? 
                  <div>
                   <img src="./arrived1.png" className="iconReturnImg"/>
                  <input defaultValue={this.state.returnDate} name="returnDate" type="date"  className="trip-end"   required/>
                  </div>
                   :
                  ""
                }
                 <div className="HomeSearch HomeSearch2">
                <input className="searchInput2" type="submit" value="Search"/>
              </div>
              </div>
 
 
  
        </form>
        
        </div>
        </div>
        
        <NotificationContainer/>
  
       
      </div>

    )
  }
}

export  default FromSunmit