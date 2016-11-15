import React from 'react';

import store from '../store';
export default React.createClass({
  render(){
    return(
      <li>
      <img className="cart-pic" src={this.props.item.picture}/>
      <span>{this.props.item.name}</span>
      <span>${this.props.item.price}</span>
      <input value="Remove" type="button" onClick={this.handleClick}/>
      </li>
    );
  },
  handleClick(e){
    store.cart.removeItem(this.props.item);
  }
});
