import React, { Component } from 'react'
// import data from './dump.json'
import Axios from 'axios'

class Mainbody extends Component {
    constructor(props){
        super(props)
        this.state={
            id:1,   
            mainbodyData:[]
        }
        this.idRefs = {};
    }

    componentDidMount(){
        Axios.get('http://api-docs.gitodemos.com/api/docs/list.php?details=1') 
        .then((result)=>{
            this.setState({mainbodyData:result.data})
            
        })
    }

    static getDerivedStateFromProps(props){
        console.log(props);
        return{
            id: props.id
        }        
    }
  
    componentDidUpdate(prev, nex){
        console.log(this.state.id, 'id');
        if(document.querySelector(`#mbData${this.state.id}`)){
            //console.log('yo',document.querySelector(`#mbData${this.state.id}`).getBoundingClientRect());
            window.scrollTo(0, document.querySelector(`#mbData${this.state.id}`).getBoundingClientRect().top)
        }
    }

   
    render() {
        const {mainbodyData} = this.state;
        return (
            
               <div>
                        <div className="Main-body" >
                   <div className ="Content">
                        { mainbodyData.length > 0 ?
                        Object.keys(mainbodyData[0]).map((key) => 
                            mainbodyData[0][key].map((mbData, i)=>
                                <div style={{'height': '400px'}} id={`mbData${mbData.id}`} ref={el => (this.idRefs[mbData.id] = el)}>
                                    <h1>{mbData.module}</h1>
                                    <p>{mbData.title}</p>
                                    <p>{mbData.details.description}</p>
                                </div>
                            //console.log(mbData)
                            )
                            
                        )
                     :null}
                     </div>
                     </div>
              </div>
      )

    }

}

export default Mainbody;


  