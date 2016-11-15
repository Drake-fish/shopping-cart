import React from 'react';

import store from '../store';

export default React.createClass({
  render(){
    return(
      <li>
      <img className="picture" src={this.props.item.picture}/>
      <div className="description">
      <span>{this.props.item.description}</span>
      </div>
      <div className="prices">
      <span>{this.props.item.name}</span>
      <span>${this.props.item.price}</span>
      <input value="+ Add to cart" type="button" onClick={this.handleClick}/>
      </div>
      </li>
    );
  },
  handleClick(e){
    console.log('clicked');
    store.cart.addItem(this.props.item);
    console.log(this.props);
  }
});
