import React from 'react'
import App from '../App';
import { render } from '@testing-library/react';
import Msg from '../App';
const data='local'
const specification= {width:1000,
  length:2000};
const length = specification.length;
const getDetails = specification =>
  (

    `${specification.width} ${specification.length}`
  ) 

class Ready extends Component(){
constructor(){
super()
this.State= {
  Message= "open"
}
}


changeMessage ()
{

  this.setState({
  Message= "close"
   } );
  }
}

function Ready(){
  return(
 {
  <div>
  <h1>this.setState.Message</h1>

  <button onClick={()=> this.changeMessage}>clickk</button>

    if(length>3000)
     {
        ("specifies " + getDetails(specification));
     }
 else
 {
     (" does not specifies " + getDetails(specification));
 }
            
  
</div>
 }
}
export default Ready;