import React from 'react';

import store from '../store';
import $ from 'jquery';
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
      <input type="number" id={this.props.item.name} defaultValue='1' onChange={this.handleChange} placeholder="quantity"/>
      <input value="+ Add to cart" type="button" onClick={this.handleClick}/>
      </div>
      </li>
    );
  },

  handleClick(e){
    let quantity=document.getElementById(this.props.item.name).value;
    if(quantity<0){
      alert('it must be more than 1');
    }else{
      let price=this.props.item.price*quantity;
      this.props.item.price=price;
      this.props.item.quantity=quantity;
      store.cart.addItem(this.props.item);
  }
  }

});
