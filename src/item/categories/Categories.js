import React, { Component } from 'react';
import './Categories.css';

class ItemCategories extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	categories: props.categories
	    };
	  }

	render() {
		return <ul className="item-categories">
          {this.state.categories.map(function(category){
            return <li key={category.name}>
            	<span>
            		{category.subCategories && category.subCategories.length ? 
            			<span onClick={() => category.isOpened = !category.isOpened}>{category.isOpened ? <span className="icon-chevron-down"></span> : <span className="icon-chevron-up"></span>}</span>
        			: null}
            		{category.name} 
            	</span>
            	<span>
	            	<span className="icon-share-alt"></span>
            	</span>
            </li>;
          })}
        </ul>;
	}
}

export default ItemCategories;