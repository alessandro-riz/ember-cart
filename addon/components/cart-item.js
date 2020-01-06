import Component from '@ember/component';
import layout from '../templates/components/cart-item';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['cart-item'],

  actions: {
    removeItem(item) {
      this.cart.removeItem(item);
    }
  }
});
