import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';



class Home extends Component {
 
    state = {
      popularFlight : []
    
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
       
        return(
          <div key={i}>
              <img src={eachFlight.routeCoverImage} width="100px"/>
              <p><span>{eachFlight.origin} - {eachFlight.destination}</span></p>
             <p><span>{eachFlight.departureDate} - {eachFlight.returnDate}</span></p>
              <p>{eachFlight.tripType}</p>
              <p>{eachFlight.fareClass}</p>
              <p>{eachFlight.priceUSD}</p>

              
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