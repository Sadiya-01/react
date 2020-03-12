import React, {Component} from 'react';
import Msg from '../pages/react2';
class App extends Component{ 
    constructor(){
        super()
            this.state= {
                msg: "Welcome"
            }
        }

    changeMsg=()=>{
        this.setState({
            msg: " Thank you"
        })
    }
    
    render(){
            return (
            <div>
            
            <h1>
            {this.state.msg}
            </h1>
            <button onClick={this.changeMsg}>Click ME</button>
            </div>
        )
    }
}

export default App;