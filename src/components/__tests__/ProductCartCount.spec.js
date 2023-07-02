import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import useProductStore from '../../stores/product';
import ProductCartCount from '../common/product/ProductCartCount.vue';

describe('unit testing ProductCartCount for cart product page', () => {
  let wrapper = null;
  let productStore = null;

  beforeEach(() => {
    wrapper = shallowMount(ProductCartCount, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              quantityProducts: [{ productId: 1, quantity: 2 }],
              cartProducts: [
                {
                  productId: 'id-1',
                  title:
                    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                  image:
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                  price: 109.95,
                  quantity: 2,
                  isProductCart: true,
                },
              ],
            },
          }),
        ],
      },
      props: {
        productId: 'id-1',
      },
    });

    productStore = useProductStore();
  });

  afterEach(() => wrapper.unmount());

  it('should calls the correct action when button delete product is clicked', async () => {
    const button = wrapper.find('[data-testid="delete-product"]');

    await button.trigger('click');

    expect(productStore.deleteProductCart).toHaveBeenCalledTimes(1);
  });

  it('should calls the correct action when button add quantity product is clicked', async () => {
    const button = wrapper.find('[data-testid="add-count"]');

    await button.trigger('click');

    expect(productStore.updateProductCart).toHaveBeenCalledTimes(1);
  });

  it('should calls the correct action when button remove quantity product is clicked', async () => {
    const button = wrapper.find('[data-testid="remove-count"]');

    await button.trigger('click');

    expect(productStore.updateProductCart).toHaveBeenCalledTimes(1);
  });
});
