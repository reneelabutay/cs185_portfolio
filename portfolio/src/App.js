import React, { Component } from 'react';
import './App.css';
import './style.css';
import './nav-bar.css';
import Body from './Components/Body';
import TabList from './Components/TabList';
import ScrollToTop from './Components/ScrollToTop';



export class App extends Component {
	
	constructor() {
		super();
		this.state = {
			activeTab: 1
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
	    		<div className="navigation-bar">
	    			<div class="logo">Renee Labutay</div>
	    			<TabList tabs={tabs} 
	    			changeTab={this.changeTab}
	    			activeTab={this.state.activeTab}/>
	    		</div>
	    		<div className="main-body">
	    			<Body activeTab={this.state.activeTab}/>
	    		</div>
	    		<div className="scroll-button">
	    			<ScrollToTop/>
	    		</div>
	    	</div>
	    );
  }
}
export default App;