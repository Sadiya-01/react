import React, { Component } from 'react'

class ControlledHook extends Component{
    state={
        value:" "
    }
    handleChange=e=>{
    this.setState({value:e.target.value})
    };
  render(){
      return(
          <div>
              <form>
                  <h1>controlled hook</h1>
                  <input
                  type="text"
                  value={this.setState.value}
                  onChange={this.handleChange}
                  />
              </form>
          </div>
      )
  }
}
export default ControlledHook;