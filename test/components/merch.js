import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Merch from '../../app/scripts/components/merch';
import {spyOnComponentMethod} from 'sinon-spy-react';

describe('merch Container',()=>{
  let merch;
  beforeEach(()=>{
    merch=shallow(<Merch/>);
  });

  it('should be a div element', ()=>{
    expect(merch.is('div')).to.equal(true);

  });
  it('should contain a ul as a child',()=>{
    expect(merch.children('div').children('ul')).to.have.length(1);
  });
  it('should contain an h2 with the text Our Products',()=>{
    expect(merch.children('div').children('h2').text()).to.equal('Our Products');
  });
  it('should contain the shopping cart',()=>{
    expect(merch.find('CartContainer')).to.exist;
  });
  
});
