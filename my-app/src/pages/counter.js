import React, { Component } from 'react'
import Script from '../App.js'
class Hands extends Component{
    State={count:0}
    handleIncrement=(step)=> {
        this.setState({count:this.State.count+step});
    }

    render(){
        return(
         <div>
             <h1>{this.State.count}</h1>
             <button onClick ={()=> this.handleIncrement(3)}>increment by 3</button>
         </div>
        )
    }
}
export default Hands;