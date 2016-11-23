import React, { Component } from 'react';
import './Todo.css';

class ItemTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo
        };
    }

    render() {
        return (
            <div className="item-todo">
                <input type="text" value={this.state.todo.name}/><br/>
                <input type="checkbox" checked={this.state.todo.isActive ? 'checked' : null}/> Done<br/>
                <textarea className="item-todo-textarea" rows="10" placeholder="Description"></textarea>
            </div>
        )
    }
}

export default ItemTodo;