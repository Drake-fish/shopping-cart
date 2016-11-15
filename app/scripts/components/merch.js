import React from 'react';

import MerchItem from './MerchItem';

import store from '../store';
import CartContainer from './cartContainer';

export default React.createClass({
  render(){
    const allMerch=store.merch.map((item,i,arr)=>{
      return (
        <MerchItem key={i} item={item}/>
      );
    });
    return(
      <div className="everything">
      <div className="products">
      <h2>Our Products</h2>
      <ul>{allMerch}</ul>
      </div>
      <CartContainer/>
      </div>
    );
  }
});
