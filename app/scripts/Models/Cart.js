import Backbone from 'backbone';
import _ from 'underscore';


export default Backbone.Model.extend({
  defaults:{
    items:[],
    quantities:[],
    total:0

  },
addItem(item){
    console.log(item);
    console.log(this.get('items'));
    let newItems=this.get('items').concat(item);
    console.log(newItems);
    this.set({'items':newItems,'total': this.getTotal(newItems)});

  },
removeItem(item){
  let newItems= _.without(this.get('items'),item);
  this.set({'items':newItems, 'total': this.getTotal(newItems)});

},
getTotal(newItems){
let prices= _.pluck(newItems,'price');

  let cartTotal= prices.reduce(function(a,b){
    return a+b;
  },0);
 return cartTotal;
}


});
