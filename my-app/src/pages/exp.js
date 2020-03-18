import React, { Component } from 'react';
import Clear from '../App.js'
import { render } from '@testing-library/react';

class Deal extends Component{

    constructor() {
        super()
        this.State= {
            msg:'in'
        }
    }

    changeMsg= ()=> {
        this.setstate =({
            msg:'out'
        })
            
    
    
    }


    render() {
        return(
    
            <div >
                
                
                    <p>The first of my react app</p>
                
                    <h3> Bottle is dry</h3>
                
        
                    <button onClick={this.changeMsg}> Go</button>  


                
            </div>
        )
    }
}
export default Deal;