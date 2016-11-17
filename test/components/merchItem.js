import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MerchItem from '../../app/scripts/components/MerchItem';
import {spyOnComponentMethod} from 'sinon-spy-react';

describe('Merch item',()=>{
  let merchItem;
  let spy;
  beforeEach(()=>{
    spy=spyOnComponentMethod(MerchItem,'handleClick');
    merchItem=shallow(<MerchItem key={1} item={'blah'}/>);
  });
afterEach(()=>{
  spy.restore();
});

//display stuff
  it('should be a li element', ()=>{
    expect(merchItem.is('li')).to.equal(true);

  });
  it('should contain 4 spans as children',()=>{
    expect(merchItem.children('div').children('span')).to.have.length(4);
  });

  it('should display the item name',()=>{
    merchItem.setProps({item:{name:'Jurassic Park'}})
    expect(merchItem.find('.name').text()).to.equal('Jurassic Park');
  });
  it('should display the items price',()=>{
    merchItem.setProps({item:{price:10}});
    expect(merchItem.find('.price').text()).to.equal('$10');
  });


//click stuff
  // it('should call the click handler when clicked',()=>{
  //   merchItem.find('.addButton').simulate('click');
  //   expect(spy.callCount).to.equal(1);
  // });

});
