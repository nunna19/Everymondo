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
           <div key={i}>
             
              <div className="showPopFlight">
                <div className="card" >
                  <div className="imgPopFlight" >
                    <img  src={eachFlight.routeCoverImage} />
                  </div>
                  <div className="detailPopFlight">
                    <p><span>{eachFlight.origin} - {eachFlight.destination}</span></p>
                    {dateTravel}
                    <p>{eachFlight.tripType}</p>
                    <p>{eachFlight.fareClass}</p>
                    <p>${eachFlight.priceUSD}</p>   
                    <button type="submit" class="btn">VIEW DEAL</button>
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