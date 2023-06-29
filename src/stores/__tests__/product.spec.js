import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useProductStore from '../product';

window.alert = vi.fn();

describe('Product store test', () => {
  let store = null;
  window.alert.mockClear();

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useProductStore();
  });

  it('initialize the initial state value', () => {
    expect(store.product).toEqual(null);
    expect(store.cartProducts).toEqual([]);
    expect(store.quantityProducts).toEqual([]);
    expect(store.isLoading).toEqual(true);
    expect(store.isAvailableProduct).toEqual(false);
    expect(store.availableProduct).toEqual(undefined);
    expect(store.backgroundProduct).toEqual('');
  });

  it('test getProductByCount should have return single product', async () => {
    await store.getProductByCount(1);

    expect(store.isLoading).toEqual(false);
    expect(store.isAvailableProduct).toEqual(true);

    expect('title' in store.product).toEqual(true);
    expect(store.product).toEqual({
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    });
  });

  it('test getProductByCount should have return unavailable product', async () => {
    await store.getProductByCount(5);

    expect(store.isLoading).toEqual(false);
    expect(store.isAvailableProduct).toEqual(false);
    expect(store.product).toEqual(null);
  });

  it('test addToCart should add the product to the QuantityProduct', async () => {
    await store.addToCart(1, 1);
    expect(store.quantityProducts).toEqual([{ productId: 1, quantity: 1 }]);
  });

  it('test getCartProducts should have return CartProducts', async () => {
    await store.addToCart(1, 1);

    // get product from cart product
    await store.getCartProducts();

    expect(store.cartProducts.length).toEqual(1);
    expect(store.cartProducts).toEqual([
      {
        productId: `id-1`,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        price: 109.95,
        quantity: 1,
        isProductCart: true,
      },
    ]);
  });

  it('test addToCart should add the product to the QuantityProduct', async () => {
    await store.addToCart(1, 1);
    expect(store.quantityProducts).toEqual([{ productId: 1, quantity: 1 }]);

    await store.updateProductCart('id-1', 5);
    expect(store.quantityProducts).toEqual([{ productId: 1, quantity: 5 }]);
  });

  it('test deleteProductCart should delete the product in the quantity Products', async () => {
    await store.addToCart(1, 1);
    expect(store.quantityProducts).toEqual([{ productId: 1, quantity: 1 }]);

    await store.deleteProductCart('id-1');
    expect(store.quantityProducts).toEqual([]);
  });

  it('test clearProductsCart should return cartProducts & quantityProducts state with an initialized value', async () => {
    await store.addToCart(1, 1);
    await store.addToCart(2, 1);

    expect(store.quantityProducts.length).toEqual(2);

    store.clearProductsCart();

    expect(store.quantityProducts.length).toEqual(0);
    expect(store.quantityProducts.length).toEqual(0);
  });

  it('test setBackgroundProduct should return BackgroundProduct from category product', () => {
    store.setBackgroundProduct("men's clothing");

    expect(store.backgroundProduct).toEqual("men's clothing");
  });
});
