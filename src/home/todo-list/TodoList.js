import React, { Component } from 'react';
import './TodoList.css';

class HomeTodoList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	todoList: props.todoList
	    };
    }

	render() {
		return <ul className="home-todo-list">
          {this.state.todoList.map(function(todoItem){
            return <li key={todoItem.name}>
            	<span>
                    <input type="checkbox" checked={todoItem.isActive ? "checked" : null}/>
            		{todoItem.name}
            	</span>
            	<span className="icon-edit"></span>
            </li>;
          })}
        </ul>;
	}
}

export default HomeTodoList;