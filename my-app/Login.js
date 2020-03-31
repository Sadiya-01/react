import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'' ,
            password:''
        } 
    }
    login=()=>{
        console.warn(this.state)
    }
    render() {
        return (
            <div>
                <input type="text"
                placeholder='User Name'
                name="user" onChange={(e)=> this.setState({name:e.target.value})} /><br/><br/>
                <input type="Password"
                placeholder='Password'
                 name="Password" onChange={(e)=> this.setState({password:e.target.value})} /> <br/><br/>
                <button onClick= {()=>{this.login()}}> Login </button>
            </div>
        )
    }
}
export default Login;