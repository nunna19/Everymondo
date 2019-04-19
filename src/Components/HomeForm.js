import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.scss';



class HomeForm extends Component {




  render(){
  
    return(
      <div className="HomeForm" >
      <div className="BookForm">
      <form>
     
              <div className="HomeForm1">
                <select className="tripType" name="tripType">
			            <option name="roundTrip" value="roundTrip">Round-trip</option>
			            <option name="oneWay" value="oneWay">One Way</option>
		            </select>

                  
              <select className="fareClass" name="fareClass"  >
			            <option value="Economy">Economy</option>
			            <option value="PremiumEconomy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="FirstClass">First Class</option>
		            </select>

                <span className="passenger" >passenger:<input  type="number" name="passengerCount" min="1" max="5" defaultValue="1" ></input></span>
                </div>

              <div className="input">
                <input  className="origin" name="origin" type ="text" placeholder="origin..."/>

                  <img className="iconRoundTrip" src="./roundTrip.png"/>        

                <input className="destination" name="destination" type ="text" placeholder="destination..."/>
                </div>

                <br/>

                <div>
                <img src="./depart1.png" className="iconDepartImg" />  
                <input  name="departureDate" type="date"  className="trip-start"  required/>
                </div>

               <div>
                  <img src="./arrived1.png" className="iconReturnImg"/>
                  <input name="returnDate" type="date"  className="trip-end"   required/>
                </div>
              
        
              <div className="HomeSearch">
              <Link className="linkDeal" to="/NoDetail"><input  type="submit" value="Search" /></Link> 
              </div>
        </form>
        

      </div>
      </div>


    )
   }
}

export default HomeForm