import Component from '@ember/component';
import layout from '../templates/components/cart-counter';

import {
    computed
} from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['cart-counter'],
  classNameBindings: ['isEmpty::cart-empty'],

  isEmpty: computed.bool('cart.counter')
});
