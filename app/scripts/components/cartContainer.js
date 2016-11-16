import React from 'react';

import store from '../store';
import CartItem from './cartItem';
export default React.createClass({
  getInitialState(){
    return{
      cart: store.cart.toJSON()

    };
  },
  componentDidMount(){
    store.cart.on('change update',()=>{
      this.setState({cart:store.cart.toJSON()});
    });
  },
  render(){
    let allCartItems= this.state.cart.items.map((item,i,arr)=>{
      return(
        <CartItem key={i} item={item} index={i}/>
      );
});
    return(
      <div className="cart">
      <div className="title">
      <h2>Your Cart</h2>
      <i id="shoppingcart" className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <ul>
      {allCartItems}
      </ul>
      <span className="total">Total: ${this.state.cart.total}</span>
      </div>
    );
  }
});
