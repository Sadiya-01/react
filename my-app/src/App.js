import React, { Component } from 'react';
/*import logo from './logo.svg';*/
/*import Add from './pages/exp1';
mport Fun from './pages/hello';
import Deal from './pages/exp';*/
/*import Pro from './pages/stateprops';*/
import Fast from './pages/parent'
/*function App() {
  return (
  
    <div>
    <Fun/>
    </div>
  );
}
export default App;//


function Temp(){
  return(
    <div>
      <Add/>
    </div>
  )
} 
export default Temp;
class Pet extends Comment{
  render(){
    return(
      <div>
      <Pro/>
      </div>
    )
  }
}
export default Pet;

class User extends Component{
  render(){
    return(
      <div>
        <Pass  name={"sadiya"} user={" new"} />
         
        
      </div>
    )
  }
}
export default User;

class Set extends Component{
  render(){
    return(
      <div>
        <Full />
      </div>
    )
  } 
}
export default Set;*/

class Stat extends Component{
  state = {
    counter:0
  }

  componentDidMount(){
    this.add()
  }
 

  fun = () => {
    this.setState({
      counter:this.state.counter+1
    })
  }
mult=()=>{
  return 10;
}
 add=()=>{
   let a=this.mult()
   let b=10
   alert(a+b)
 }

  render(){
    return(
      <div>
        <h3>{this.state.counter}</h3>
        <Fast fun={this.fun} />
      </div>
    )
  }
}
export default Stat;
