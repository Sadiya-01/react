import React, { Component } from 'react'
import  {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import apidata from '../../assets/json/api.json'

class Sidebar extends Component {

    
    render() {
        
        console.log(apidata, 'data');
        
        return (
            
            <div className="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="list-group" id="list-tab" role="tablist">
                            {
                                
                                apidata.API.map(apis=>
                                    <div>
                                        
                                    <a class="col-md-2" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">{apis.name}</a>
                                    {apis.type.map(apitype=>
                                    <p>{apitype.method}</p>
                                        )}
                                        
                                    <div>
                                        
                                    </div>
                                
                                    </div>

                                )
                            }
                            
                        </div>
                    </div>
             </div>
         </div>
              
        )
    }
    
}


export default Sidebar;