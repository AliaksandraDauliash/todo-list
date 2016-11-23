import React, { Component } from 'react';
import './Container.css';
import HomeCategories from '../categories/Categories';
import HomeTodoList from '../todo-list/TodoList';

const categories = [{
	name: 'Category1',
	subCategories: [],
	todoList: [{
		name: 'TODO Item1',
		description: 'Do something interesting',
		isActive: false,

	},{
		name: 'TODO Item2',
		description: 'Do something interesting',
		isActive: true,

	},{
		name: 'TODO Item3',
		description: 'Do something interesting',
		isActive: false,

	}]
},{
	name: 'Category2',
	subCategories: []
},{
	name: 'Category3',
	subCategories: [{
		name: 'Category3.1',
		subCategories: []
	},{
		name: 'Category3.2',
		subCategories: []
	}],
	isOpened: false
},{
	name: 'Category4',
	subCategories: [],
	isOpened: false
},{
	name: 'Category5',
	subCategories: [],
	isOpened: false
},{
	name: 'Category6',
	subCategories: [],
	isOpened: false
},{
	name: 'Category7',
	subCategories: [],
	isOpened: false
},{
	name: 'Category8',
	subCategories: [],
	isOpened: false
},{
	name: 'Category9',
	subCategories: [],
	isOpened: false
},{
	name: 'Category10',
	subCategories: [],
	isOpened: false
},{
	name: 'Category11',
	subCategories: [],
	isOpened: false
},{
	name: 'Category12',
	subCategories: [],
	isOpened: false
},{
	name: 'Category13',
	subCategories: [],
	isOpened: false
},{
	name: 'Category14',
	subCategories: [],
	isOpened: false
},{
	name: 'Category15',
	subCategories: [],
	isOpened: false
},{
	name: 'Category16',
	subCategories: [],
	isOpened: false
},{
	name: 'Category17',
	subCategories: [],
	isOpened: false
},{
	name: 'Category18',
	subCategories: [],
	isOpened: false
},{
	name: 'Category19',
	subCategories: [],
	isOpened: false
}]

const containerElement = (
	<div className="home-container">
		<div className="home-container-categories">
			<div className="input-append">
			  <input className="span2" type="text" placeholder="Enter category title"/>
			  <button className="btn" type="button">Add</button>
			</div>
			<HomeCategories categories={categories}/>
		</div>
		<div className="home-container-todos">
			<div className="input-append">
			  <input className="span2" type="text" placeholder="Enter TODO title"/>
			  <button className="btn" type="button">Add</button>
			</div>
			<HomeTodoList todoList={categories[0].todoList}/>
		</div>
	</div>
);

class HomeContainer extends Component {
	render() {
		return containerElement;
	}
}

export default HomeContainer;