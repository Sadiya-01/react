
import './App.css';
import React, { Component } from 'react'
import Dump from './components/assets/index';
import Header from './components/Header/Header';
import './components/Header/Header.css'
import './components/Sidebar/Api.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <Mainbody/> */}
        {/* <Sidebar/> */}
        <Dump/>
        
      </div>
    )
  }
}
export default App;

