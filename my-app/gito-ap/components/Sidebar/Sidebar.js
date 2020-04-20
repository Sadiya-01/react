import React, { Component } from 'react'
// import  { Navbar} from 'react-bootstrap'
import Axios from 'axios'


class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            // id: 0,
            // users:null
            sidebarData:[]
        }
    }

    componentDidMount(){
        Axios.get('http://api-docs.gitodemos.com/api/docs/list.php')
        .then((result)=>{
            this.setState({sidebarData:result.data})
            //console.log(result.data[0])
        })
    }

    sideBarClicked = (id) => {
        this.props.sidebarClicked(id)
    }


    render(){
        const {sidebarData} = this.state;
        return (
            <div>
        
            <Sidebar></Sidebar>
            <div className="sidebar">

                <div className="sidebar-style">
                <div className="row">
                    {sidebarData.length > 0 ?
                        Object.keys(sidebarData[0]).map((key) => 
                            sidebarData[0][key].map((sbData, i)=>
                                <button key={sbData.id} className="sb-btn" type="button" onClick={()=>this.sideBarClicked(sbData.id)}>
                                    {sbData.title}
                                </button>
                            )
                        )
                    :null}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Sidebar; 