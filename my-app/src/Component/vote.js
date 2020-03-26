import React, {Component} from 'react';

import bjp from '../assets/vote/bjp.jpg';
import kerala from '../assets/vote/kerala.jpg';
import delhi from '../assets/vote/delhi.jpg';
import bihar from '../assets/vote/bihar.jpg';
import maharashtra from '../assets/vote/maharashtra.jpg';
import AP from '../assets/vote/AP.jpg';
import Assam from '../assets/vote/Assam.jpg';
class Vote extends Component{

	constructor(props){
		super(props);
	   
		this.state = {
			
			list : [
				{name: "Karnataka - B S Yediyurappa", flag: bjp, votes: 0},
				{name: "Kerala-pinarayi vijiyan", flag: kerala, votes: 0},
				 {name: "Delhi- Arvind Kejriwal ",flag:delhi, votes: 0},
				 {name: "Bihar - Nithish kumar", flag: bihar,votes: 0},
				{name:"Maharashtra-Uddhav Thackeray", flag: maharashtra, votes:0},
				{name:"AndhraPradesh-Y.S.Jaganmohan Reddy", flag: AP, votes:0},
				{name:"Assam-Sarbananda Sonowal", flag: Assam, votes:0},

			]
		}
		
	}

	vote (i) {
		let newList = [...this.state.list];
		newList[i].votes++;
		const newSortList = newList.sort((a,b) => b.votes - a.votes);
		this.setState({list: newSortList});
	}

	render(){
		return(
			<>
				<h1>Your Vote , Your Right</h1>
                <h2>vote the best </h2>
                
				<div className="states">
					{
						this.state.list.map((list, i) => 
							<div key={i} className ="list">
								
								<div className="voteCount">
								
									{list.votes}
								</div>
								<div className="listName">
								<img src={list.flag} width="100" alt={`${list.name}-flag`}/>
									{list.name}
								</div>
							
								<button onClick={this.vote.bind(this, i)}>Vote now</button>
					
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default Vote;
