import React, {Component} from 'react';
import '../App.scss'
import axios from 'react-axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFlight : []
    }
  }

  componentDidMount = () => {

      axios.get("https://everymundointernship.herokuapp.com/popularRoutes/BM88RE94IE35")
      .then(respons => {
        console.log("try", respons)
        this.setstate({
          popularFlight : respons.data
        })
      })
    }


    showPopFlight = () => {
      const listFlight = this.state.popularFlight.map((eachFlight,i) => {
        console.log(eachFlight.destination)
      })
      return listFlight
    }




  render(){
    console.log(this.state.popularFlight)
    return(
      <div className="home">
          {/* {this.showPopFlight()} */}
      </div>


    )
   }
}

export default Home