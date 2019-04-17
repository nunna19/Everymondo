import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';


class FromSunmit extends Component {



  render(){
    return(
      <div className="FromSunmit" >
        <div>
          <table>
            <tr>
              <td style={{width: "20px"}}>
                <select >
			            <option value="RoundTrip">Round-trip</option>
			            <option value="OneWay">One Way</option>
		            </select>
                </td>
                <td>
                <select>
			            <option value="Passenger">1  Passenger</option>
		            </select>
              </td>
              <td>
              <select>
			            <option value="Economy">Economy</option>
			            <option value="PremiumEconomy">PremiumEconomy</option>
                  <option value="Business">Business</option>
                  <option value="FirstClass">FirstClass</option>
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
              <input type="text"  placeholder="Room Search..." onChange={this.updateSearch}/>
              </td>
              <td>
              <input type="text"  placeholder="Room Search..." onChange={this.updateSearch}/>
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
              <input type="text"  placeholder="Room Search..." onChange={this.updateSearch}/>
              </td>
              <td>
              <input type="text"  placeholder="Room Search..." onChange={this.updateSearch}/>
              </td>
           </tr>
           <tr>
              <td>
                <span>Promo Code</span>
              </td>
           </tr>
           <tr>
              <td>
              <input type="text"  placeholder="Room Search..." onChange={this.updateSearch}/>
              </td>
           </tr>

        </table>
        </div>
      </div>

    )
  }
}

export  default FromSunmit