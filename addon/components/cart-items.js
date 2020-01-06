import Component from '@ember/component';
import layout from '../templates/components/cart-items';

import {
    computed
} from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['cart-items'],
  classNameBindings: ['isEmpty::cart-empty'],

  isEmpty: computed.bool('cart.counter')
});
