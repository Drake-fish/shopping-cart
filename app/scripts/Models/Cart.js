import Backbone from 'backbone';
import _ from 'underscore';


export default Backbone.Model.extend({
    defaults: {
        items: [],
        total: 0

    },
    addItem(price, quantity, item) {
        let items = this.get('items');
        //s ask if it's in the list and if it is add to the quantity else add it.
        if (items.indexOf(item) === -1) {
            let newPrice = price * quantity;
            item.total = newPrice;
            item.quantity = quantity;

            let newItems = this.get('items').concat(item);
            this.set({
                'items': newItems,
                'total': this.getTotal(newItems)
            });
        } else {
            let newQuantity = item.quantity + quantity;
            let newPrice = price * newQuantity;
            item.total = newPrice;
            item.quantity = newQuantity;
            let newItems = this.get('items').splice(item);
            this.set({
                'items': newItems,
                'total': this.getTotal(newItems)
            });

        }

    },
    removeItem(item) {
        let newItems = _.without(this.get('items'), item);
        this.set({
            'items': newItems,
            'total': this.getTotal(newItems)
        });

    },
    getTotal(newItems) {
        let prices = _.pluck(newItems, 'total');
        let cartTotal = prices.reduce(function(a, b) {
            return a + b;
        }, 0);
        return cartTotal;
    }


});
