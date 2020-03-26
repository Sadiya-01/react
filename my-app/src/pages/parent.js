import React, { Component } from 'react';
import Stat from '../App.js';

class Fast extends Component{
    
    clicked = () => {
        this.props.fun();
    
    }


    render(){
        return(
            <div>
                 <button onClick={this.clicked} > click to increment> </button>
            </div>
        )
    }
}
export default Fast;
