import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.scss';



class HomeForm extends Component {




  render(){
  
    return(
      <div className="HomeForm" >
      <div className="BookForm">
      <form>
                
              <div>
                <select className="tripType" name="tripType">
			            <option name="roundTrip" value="roundTrip">Round-trip</option>
			            <option name="oneWay" value="oneWay">One Way</option>
		            </select>
                <input type="number" name="passengerCount" min="1" max="5" defaultValue="1" ></input>
                  
              <select name="fareClass"  >
			            <option value="Economy">Economy</option>
			            <option value="PremiumEconomy">Premium Economy</option>
                  <option value="Business">Business</option>
                  <option value="FirstClass">First Class</option>
		            </select>
                </div>

         
                <span>From</span>
                <input name="origin" type ="text"/>
              
		           
              
                <span>To</span>
                <input name="destination" type ="text"/>
			        
       
        
                <span>Depart</span>
                <input  name="departureDate" type="date"  className="trip-start"  required/>

               
                  <div>
                  <span>Return</span>
                  <input name="returnDate" type="date"  className="trip-end"   required/>
                  </div>
              
 
                <span>Promo Code</span>
        
            
                <input type="submit" value="Search"/>
  
        </form>
        

      </div>
      </div>


    )
   }
}

export default HomeForm