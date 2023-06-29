// import { createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, it } from 'vitest';
import ProductCartView from '../../views/ProductCartView.vue';

describe('display correctly list product item in product cart page', () => {
  beforeEach(() => {});

  it.skip('should have expected to show a list of products in cart-page', async () => {
    mount(ProductCartView);
  });
});
