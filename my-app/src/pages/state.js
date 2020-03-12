import React, {Component} from 'react';
class State extends Component{ 
    constructor(){
        super()
            this.state = {
                msg: "hello"
            }
        }

    changeMsg(){
        this.setState=({
                msg: " thank you"
        })
   }
    
    render(){
    return (
        <div>
        <h1>
            {this.state.msg}
        </h1>
        <button onClick={() =>  this.changeMsg()}> subscribe</button>
        </div>)
    }
}
export default State;