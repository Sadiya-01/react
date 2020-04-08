import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            Email:"",
            Password:""
        } 
    }
  handlechangeall=(e)=>{
      this.setState({[e.target.name]:e.target.value})
      e.preventDefault()
  }
   
    render() {
        return (
        
            <form onSubmit={this.handlesubmit}>
                <h1> LOGIN PAGE</h1>
              
        
                <label>Email</label> <br/>
                <input type="email" name="email" value={this.state.email} onChange={this.handlechangeall}   /><br/>
                
                
                <label>Password</label>  <br/>
                <input type="text" name="Password" value={this.state.password} onChange={this.handlechangeall} />  <br/>
                <button type="submit"> Login  </button>
            
            </form> 
        
        )


    }
}
export default LoginForm;