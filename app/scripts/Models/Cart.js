import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
export default Backbone.Model.extend({
  defaults:{
    items:[],
    total:0,
    qty:0

  },
addItem(item){
    let newItems=this.get('items').concat(item);
    this.set('items',newItems);
  },
removeItem(item){
  let newItems= _.without(this.get('items'),item);
  this.set('items',newItems);
},
getTotal(){
  let totalsArr= _.pluck(this.get('items'),'price');
  let total= totalsArr.reduce(function(a,b){
    return a+b;
  },0);
  return total;
}
});
