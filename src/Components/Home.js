import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';



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

         return(
           <div >
              <div className="showPopFlight">
                <div className="card" key={i}>
                  <div className="imgPopFlight" >
                    <img  src={eachFlight.routeCoverImage} width="130px"/>
                  </div>
                    <p><span>{eachFlight.origin} - {eachFlight.destination}</span></p>
                    {dateTravel}
                    <p>{eachFlight.tripType}</p>
                    <p>{eachFlight.fareClass}</p>
                    <p>${eachFlight.priceUSD}</p>   
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