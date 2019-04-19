import React, { Component } from 'react';
import '../App.scss';
import Slider, { Range } from 'rc-slider';
import { Redirect } from 'react-router-dom';


class SearchResults extends Component {
  componentDidMount(){
    console.log(this)
  }

  showResults = (e) => {

    if( this.props.results.length === 0 ) {
      return <Redirect to="/Deal" />
    }

    let filterList = [...this.props.results].filter((data)=>{
      console.log(data)
      return ( 
          data.priceUSD > this.props.priceUSD && Number(data.departureTime.replace(':','')) > this.props.departureTime
      )
    })

    console.log(filterList)

    return filterList.map((res,i)=>{
      return(
       
          <tr key={i}>
           <td>{res.departureTime}</td> 
            <td>${res.priceUSD}</td>
          </tr>
      )
    })
  }


  render(){
    console.log(this.props.results.length)
    return(

      
      <div className="SearchResults">
         <Slider className="slider" max="200" name="priceUSD"  onChange={(e) => this.props.updateSearch(e, "priceUSD")}/>
           <span className="sliderText1" >${this.props.priceUSD }</span> 

         <Slider className="slider"  min={0} step={100} max={2400} name="departureTime"  onChange={(e) => this.props.updateSearch(e, "departureTime")}/>
           <span className="sliderText" >Departure Time:<span className="numberTime">{this.props.departureTime}</span></span>
         <div className="table1">
          <table className="table">
             <tr>
              <th>Departure Time</th> 
               <th>priceUSD</th>
            </tr>

             {this.showResults()}

          </table>
         </div>
 
      </div>

    )
  }
}

export  default SearchResults