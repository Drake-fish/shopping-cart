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
          <span className="name">{this.props.item.name}</span>
          <span className="price">${this.props.item.price}</span>
          <span className="qty">Qty</span>
          <input type="number" className="quantity" id={this.props.item.name} defaultValue='1' placeholder="quantity"/>
          <input className="addButton" value="+ Add to cart" type="button" onClick={this.handleClick}/>
        </div>
      </li>
    );
  },

  handleClick(e){
    let quantity=Number(document.getElementById(this.props.item.name).value);
    if(quantity<=0){
      throw new Error('Quantity cannot less than 1');
    }else{
      let price=this.props.item.price;
      store.cart.addItem(price,quantity,this.props.item);
  }
  }

});
