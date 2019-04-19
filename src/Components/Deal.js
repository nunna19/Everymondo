import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.scss';
import axios from 'axios';
import moment from 'moment'


class Home extends Component {
 
    state = {
      popularFlight : [],
       
  }

  componentDidMount = () => {
      
      axios.get("https://everymundointernship.herokuapp.com/popularRoutes/BM88RE94IE35")
      .then(respons => {
        this.setState({
          popularFlight : respons.data
        })
      })
    }



    showPopFlight = () => {
      const listFlight = this.state.popularFlight.map((eachFlight,i) => {

        let dateTravel = []

        if (eachFlight.tripType !== "roundTrip"){
          dateTravel = <p><span>{eachFlight.departureDate}</span></p> 
         }else{
          dateTravel = <p><span>{eachFlight.departureDate} - {eachFlight.returnDate}</span></p>
         } 
        let departureDate = moment(eachFlight.departureDate, "MM/DD/YYYY").format("YYYY-MM-DD")
        let returnDate = moment(eachFlight.returnDate, "MM/DD/YYYY").format("YYYY-MM-DD")

        console.log(returnDate)

         return(
           <div key={i}>
              <div className="showPopFlight">
             
                <div className="card" >
                  <div className="imgPopFlight" >
                    <img  src={eachFlight.routeCoverImage} />
                  </div>
                  <div className="detailPopFlight">
                    <p ><span className="D-Where" >{eachFlight.origin} - {eachFlight.destination}</span></p>
                    {dateTravel}
                    <p className="D-tripType" >{eachFlight.tripType}</p>
                    <p className="D-fareClass" >{eachFlight.fareClass}</p>
                    <div className="div-D-priceUSD"><p className="D-priceUSD" >${eachFlight.priceUSD}</p> </div>
                      
                    <button className="veiwDeal" type="submit" class="btn">
                      <Link to={`/FormSubmit?price=${eachFlight.priceUSD}&fareClass=${eachFlight.fareClass}&tripType=${eachFlight.tripType}&origin=${eachFlight.origin}&destination=${eachFlight.destination}&departureDate=${departureDate}&returnDate=${returnDate}`}>VIEW DEAL </Link> 
                    </button>
                  </div>
                </div>
              </div>
             
            </div>
            
        )
      })
      return listFlight
    }




  render(){
    console.log(this.state.popularFlight)
    return(
      <div className="home" >
          {this.showPopFlight()}
      </div>


    )
   }
}

export default Home