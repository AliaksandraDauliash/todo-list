import React, { Component } from 'react';
import './ProgressBar.css';

class HomeProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: {width: props.progress + '%'}
        };
    }
    render() {
        return (
            <div className="progress-bar">
                <span style={this.state.progress} className="progress-bar-line"></span>
            </div>
        )
    }
}

export default HomeProgressBar;