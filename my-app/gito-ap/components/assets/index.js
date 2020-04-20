import React, { Component } from 'react'
import data from '../assets/dump.json'
import Sidebar from '../Sidebar/Sidebar'
import MainBody from './Mainbody'

class Dump extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 1
        }
    }

    sideBarClicked = (id) => {
        this.setState({
            id: id
        })
    }

    render(){
        console.log(data)
        return(
            <div className="side-main">
                <div className="main">
                <Sidebar sidebarClicked={this.sideBarClicked} />
                <MainBody id={this.state.id} />
                
            </div>
            </div>
        )
    }
}

export default Dump;