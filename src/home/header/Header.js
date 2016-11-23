import React, { Component } from 'react';
import './Header.css';

const headerElement = (
    <div className="header-container">
        <span className="header-container-text">To-Do List</span>
        <span className="header-container-inputs">
            <input className="header-container-checkbox" type="checkbox"/> Show active
            <input className="header-container-search" type="text" placeholder="Search"/>
        </span>
    </div>
);


class HomeHeader extends Component {
    render() {
        return headerElement;
    }
}

export default HomeHeader;
