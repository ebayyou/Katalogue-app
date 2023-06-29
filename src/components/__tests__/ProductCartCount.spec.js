// import { createPinia } from 'pinia';
import { beforeEach, describe, it } from 'vitest';
import ProductCartCount from '../common/product/ProductCartCount.vue';
import { mount } from '@vue/test-utils';

describe('unit testing ProductCartCount for cart product page', () => {
  beforeEach(() => {});

  it.skip('user can delete product in cart', async () => {
    mount(ProductCartCount, {
      props: {
        productId: 'id-1',
      },
    });

    // const buttonDeleteProduct = await screen.findByTestId('delete-product');

    // await fireEvent.click(buttonDeleteProduct);

    expect(buttonDeleteProduct.nodeName).toBe('BUTTON');
  });

  it.skip('user can update product to add quantity product', async () => {
    mount(ProductCartCount, {
      props: {
        productId: 'id-1',
      },
    });

    // const buttonAddCount = await screen.findByTestId('add-count');

    // await fireEvent.click(buttonAddCount);

    expect(buttonAddCount.nodeName).toBe('BUTTON');
  });

  it.skip('user can update product to remove quantity product', async () => {
    mount(ProductCartCount, {
      props: {
        productId: 'id-1',
      },
    });

    // const buttonRemoveCount = await screen.findByTestId('remove-count');

    // await fireEvent.click(buttonRemoveCount);

    expect(buttonRemoveCount.nodeName).toBe('BUTTON');
  });
});
