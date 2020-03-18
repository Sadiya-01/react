import React, { Component } from 'react';
import User from '../App.js';
class Pass extends Component{
    render(){
        return(
            <div>
                <p> {this.props.name} </p>
                <p>{this.props.user}</p>
               
            </div>
        )
    }

}
export default Pass;