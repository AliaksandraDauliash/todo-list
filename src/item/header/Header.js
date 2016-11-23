import React, { Component } from 'react';
import './Header.css';

class ItemHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    render() {
        return (
            <div className="header">
                {this.state.item.name}
            </div>
        )
    }
}

export default ItemHeader;