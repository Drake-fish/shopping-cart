import React from 'react';

import store from '../store';
export default React.createClass({
  render(){
    console.log(this.props.item);
    return(
      <li>
        <img className="cart-pic" src={this.props.item.picture}/>
        <span className="name">{this.props.item.name}</span>
        <span className="price">${this.props.item.price}</span>
        <span className="quantity">QTY:{this.props.item.quantity}</span>

        <input value="Remove" type="button" onClick={this.handleClick}/>
      </li>
    );
  },
  handleClick(e){
    store.cart.removeItem(this.props.item);
  }
});
