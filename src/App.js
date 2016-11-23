import React, { Component } from 'react';
import './App.css';
import HomeHeader from './home/header/Header';
import HomeProgressBar from './home/progress-bar/ProgressBar';
import HomeContainer from './home/container/Container';
import ItemHeader from './item/header/Header';
import ItemContainer from './item/container/Container';

// const item  = {
// 	name: 'ToDo Item #1'
// }
// <ItemHeader item={item} />
// <ItemContainer />
const element = (
	<div>
		<HomeHeader />
		<HomeProgressBar progress={40}/>
		<HomeContainer />
	</div>
);

class App extends Component {
  render() {
    return element;
  }
}

export default App;
