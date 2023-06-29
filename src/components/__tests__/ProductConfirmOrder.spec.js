// import { createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, it } from 'vitest';
import ProductConfirmOrder from '../../views/ProductConfirmOrder.vue';

describe('display correctly list product item in product confirm order page', () => {
  beforeEach(() => {});

  it.skip('should have expected to show a correct list of products in order-confirm page', async () => {
    mount(ProductConfirmOrder);
  });
});
