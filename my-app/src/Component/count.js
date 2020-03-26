import React, { Component } from 'react'
import Counter from '../App'
class Counter extends Component{
    constructorpt(props){
        super(props) 
            count=0
        

    }
  incrementCount=()=> {
      this.setState({
          Count:this.State.count+1
      })
  }
    
  render()
{
    return(
        <div>
            <button onClick={this.setState.count}>votenow</button>
        </div>
    )
}
}
export default Counter;