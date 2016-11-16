import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CartItem from '../../app/scripts/components/cartItem';
import {spyOnComponentMethod} from 'sinon-spy-react';

describe('cart item',()=>{
  let cartItem;
  let spy;
  beforeEach(()=>{
    spy=spyOnComponentMethod(CartItem,'handleClick');
    cartItem=shallow(<CartItem key={1} item={'blah'} index={1} />);
  });
afterEach(()=>{
  spy.restore();
});

//display stuff
  it('should be a li element', ()=>{
    expect(cartItem.is('li')).to.equal(true);

  });
  it('should contain 3 spans as children',()=>{
    expect(cartItem.children('span')).to.have.length(3);
});

  it('should display the item name',()=>{
    cartItem.setProps({item:{name:'Jurassic Park'}})
    expect(cartItem.find('.name').text()).to.equal('Jurassic Park');
  });
  it('should display the items price',()=>{
    cartItem.setProps({item:{price:10}});
    expect(cartItem.find('.price').text()).to.equal('$10');
  });
  it('should display the quantity of the item',()=>{
    cartItem.setProps({item:{quantity:1}});
    expect(cartItem.find('.quantity').text()).to.equal('QTY:1');
  });


//click stuff
  it('should call the click handler when clicked',()=>{
    cartItem.find('input').simulate('click');
    expect(spy.callCount).to.equal(1);
  });

});
