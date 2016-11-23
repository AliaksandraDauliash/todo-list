import React, { Component } from 'react';
import './Container.css';
import ItemCategories from '../categories/Categories';
import ItemTodo from '../todo/Todo';

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
	<div className="item-container">
		<div className="item-container-categories">
			<ItemCategories categories={categories}/>
		</div>
		<div className="item-container-todos">
			<div className="item-container-todos-btns">
				<button className="btn">Save changes</button>
				<button className="btn">Cancel</button>
			</div>
			<ItemTodo todo={categories[0].todoList[0]}/>
		</div>
	</div>
);

class ItemContainer extends Component {
	render() {
		return containerElement;
	}
}

export default ItemContainer;