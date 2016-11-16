import Cart from '../../app/scripts/Models/Cart';
import Backbone from 'backbone';
import sinon from 'sinon';

import { expect } from 'chai';

describe('cart model',()=>{
  let cart;

  beforeEach(()=>{
    cart= new Cart();
  });
  //basic functionality
  it('should be a function',()=>{
    expect(Cart).to.be.a('function');
  });
  it('should create a backbone model', ()=>{
    expect(cart).to.be.an.instanceof(Backbone.Model);
  });


  //default values
  it('should have a default items of []',()=>{
    expect(cart.get('items')).to.deep.equal([]);
  });
  it('should have a default total of 0', ()=>{
    expect(cart.get('total')).to.equal(0);
  });


  //methods
  it('should have a addItems method',()=>{
    expect(cart).to.have.property('addItem');
    expect(cart.addItem).to.be.a('function');
  });
  it('should have a removeItem method',()=>{
    expect(cart).to.have.property('removeItem');
    expect(cart.removeItem).to.be.a('function');
  });
  it('should have a getTotal method',()=>{
    expect(cart).to.have.property('getTotal');
    expect(cart.getTotal).to.be.a('function');
  });

  // change events

  it('should add an item to the items array when running addItem',()=>{
    cart.addItem(3,4,{Drake:'hello'});
    expect(cart.get('items')).to.deep.equal([{Drake:'hello',quantity:4,total:12}]);
  });
  it('should remove an item from the items array when running removeItem',()=>{
    cart.removeItem();
    expect(cart.get('items')).to.deep.equal([]);
  });
  it('should fire a change event when addItem is called',()=>{
    let spy=sinon.spy();
    cart.on('change',spy);
    cart.addItem(3,4,{Drake:'hello'});
    expect(spy.callCount).to.equal(1);
  });
  it('should fire a change event when removeItem is called',()=>{
    let spy=sinon.spy();
    cart.on('change',spy);
    cart.addItem(3,4,{Drake:'hello'});
    cart.removeItem({Drake:'hello',quantity:4,total:12});
    expect(spy.callCount).to.equal(1);
  });
  it('should not fire a change event when getTotal is called',()=>{
    let spy=sinon.spy();
    cart.on('change',spy);
    cart.getTotal();
    expect(spy.callCount).to.equal(0);
  });


  //robust tests on methods
  it('should update the total when addItem is called',()=>{
    cart.addItem(3,4,{Drake:'hello'});
    expect(cart.get('total')).to.equal(12);
    });
    // This tests for if stuff is getting run inside my methods!
    it('should run the total function when I fire the addItem function',()=>{
      let spy= sinon.spy(cart,'getTotal');
      cart.addItem(3,4,{Drake:'hello'});
      expect(spy.callCount).to.equal(1);
    });
    it('should run the total function when I fire the addItem function',()=>{
      let spy= sinon.spy(cart,'getTotal');
      cart.removeItem('Drake');
      expect(spy.callCount).to.equal(1);
    });
});
