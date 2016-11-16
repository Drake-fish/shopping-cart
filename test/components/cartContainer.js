import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CartContainer from '../../app/scripts/components/cartContainer';
import {spyOnComponentMethod} from 'sinon-spy-react';


describe('cart Component',()=>{
  let cart;

  beforeEach(()=>{
    cart=shallow(<CartContainer/>);
  });

  it('should be a div element', ()=>{
    expect(cart.is('div')).to.equal(true);

  });
  it('should contain a ul as a child',()=>{
    expect(cart.children('ul')).to.have.length(1);
});


});
