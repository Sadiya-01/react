import React,{ Component } from "react";
import './App.css';
import Menu from './Component/menu'
import About from './Component/about'
import Contact from './Component/contact'
//import Vote from './Component/vote'

/*class App extends Component{
    
    render(){
    
        return(
            <Vote/>
        )
    }
}
export default App;*/
function App(){
    return(
        <div className="App">
            <Menu/>
            <About/>
            <Contact/>
        </div>
        
    )
}
export default App;