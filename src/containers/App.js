import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
	constructor(){
		super()
		this.state = {     //co sa mi ma menit v appke
			robots: [],   
			searchfield: ''
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	 .then(response=> response.json())
	 .then(users=> {this.setState({robots: users})});
}

onSearchChange = (event) => {   //co sa spusti ked sa zmeni okienko
	this.setState({ searchfield: event.target.value})
	}

render(){
		const { robots, searchfield }= this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length){
			return <h1>Loading</h1>
		} else {
		return (
		<div className='tc'>
		<h1 className = 'f1'>Robofriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
			<CardList robots={filteredRobots} />
		</Scroll>
		</div>
		);
	}
	}
}

export default App;