import React, {component} from 'react';
import '../App.scss'
import axios from 'react-axios';

class AddPopularFlight extends Component {

  handleSubmit = () => {
    event.preventDefault() 
    let = {
      destination,
      origin,
      tripType,
      departureDate,
      returnDate,
      routeCoverImage,
      fareClass,
      priceUSD
    } =event.target


    let postObj = {
      destination : destination.value,
      origin : origin.value,
      tripType : tripType.value,
      departureDate : departureDate.value,
      returnDate : returnDate.value,
      routeCoverImage : routeCoverImage.value,
      fareClass : fareClass.value,
      priceUSD : priceUSD.value
    }

    axios.get("https://everymundointernship.herokuapp.com/popularRoutes/BM88RE94IE35" , postObj).then(res=>{
    }).catch(err => console.log(err) )
  
  };

 
  render(){
    return(
      <div className="AddPopularFlight">

      </div>


    )
   }
}

export default AddPopularFlight