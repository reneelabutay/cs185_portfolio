import React, { Component } from 'react';
import Tab from './Tab'

export class TabList extends Component {
  render() {
    return this.props.tabs.map((indTab) => (
    		<Tab tab={indTab} 
    		changeTab={this.props.changeTab}
    		activeTab={this.props.activeTab}/>
    ));
  }
}
export default TabList;

/*
- looping over the values that were from tabs array
- for each tab component every tab is the value of tab
- 
*/
