import React, { Component } from 'react'
import  {BrowserRouter as Router,Route, Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                
                <ul className="menu-ul" >
                    <li><Link to = " About "> About</Link> </li>
                </ul>
        
            </div>
        )
    }
}

export default Header;