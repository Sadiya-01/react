import React, { Component } from 'react'
import { render } from '@testing-library/react';
class Hook extends Component{
    constructor(props){
        super(props);
        //always add ref within constructor itself//
        this.textInput = React.createRef();

    }
    componentDidMount=()=>{
        //console.log(this.textInput)//
        this.textInput.current.focus()
        
    }
    render(){
       return(
           <form>
               Name: <input type='text'/>
               <br/>
               <br/>
               Password: <input type='text' ref={this.textInput}/>
               <br/>
           </form>
       )
    }
}
export default Hook;