import React, { Component } from 'react';
import './App.css';
import './style.css';
//import './nav-bar.css';
import Body from './Components/Body';
import TabList from './Components/TabList';


export class App extends Component {
	constructor() {
		super();
		this.state = {
			activeTab: 'Home'
		}
		this.changeTab = (id) => {
			this.setState({
				activeTab: id
			})
		}
	}
  	render() {
	  	const tabs = [
	  	{
	  		id:1,
	  		title: 'Home'
	  	},
	  	{
	  		id:2,
	  		title: 'Projects'
	  	},
	  	{
	  		id:3,
	  		title: 'Photography'
	  	},
	  	{
	  		id:4,
	  		title: 'Recipes'
	  	}
	  	]
	    return (
	    	<div className="body">
	    		<div className="nav-bar">
	    			<TabList tabs={tabs} 
	    			changeTab={this.changeTab}
	    			activeTab={this.state.activeTab}/>
	    		</div>
	    		<div className="main-body">
	    			<Body activeTab={this.state.activeTab}/>
	    		</div>
	    	</div>
	    );
  }
}
export default App;