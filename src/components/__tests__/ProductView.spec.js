import { mount } from '@vue/test-utils';
import { useRoute, useRouter } from 'vue-router';
import { createTestingPinia } from '@pinia/testing';
import useProductStore from '../../stores/product';
import ProductsView from '../../views/ProductsView.vue';
import useCountProductStore from '../../stores/countProduct';

// installing Vue Router in tests
vi.mock('vue-router');

describe('unit testing functionality in product view page', () => {
  let wrapper = null;
  let productStore = null;
  let countProductStore = null;

  useRoute.mockReturnValue({
    params: {
      id: 1,
    },
  });

  useRouter.mockReturnValue({
    push: vi.fn(),
  });

  beforeEach(() => {
    wrapper = mount(ProductsView, {
      global: {
        Plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              product: {
                product: {
                  id: 1,
                  title:
                    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                  price: 109.95,
                  description:
                    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                  category: "men's clothing",
                  image:
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                  rating: {
                    rate: 3.9,
                    count: 120,
                  },
                },
                isLoading: false,
                isAvailableProduct: true,
                cartProducts: [],
                backgroundProduct: '',
              },
              countProduct: {
                countProduct: 1,
              },
            },
          }),
        ],
      },
    });

    useRouter().push.mockReset();
    productStore = useProductStore();
    countProductStore = useCountProductStore();
  });

  afterEach(() => wrapper.unmount());

  it('should have expected to display the single product', () => {
    const title = wrapper.find('[data-testid="test-render-title"]');
    const image = wrapper.find('[data-testid="test-render-image"]');
    const category = wrapper.find('[data-testid="test-render-category"]');
    const description = wrapper.find('.product__desc');

    expect(title.exists()).toBe(true);
    expect(image.exists()).toBe(true);
    expect(category.exists()).toBe(true);
    expect(description.exists()).toBe(true);

    expect(title.text()).toMatch(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
    expect(image.attributes('src')).toMatch(
      'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    );
    expect(image.attributes('alt')).toMatch(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
    expect(category.text()).toMatch("men's clothing");
    expect(description.text()).toMatch(
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
    );
  });

  it('should calls the correct action when button add to cart is clicked', async () => {
    wrapper.find('[data-testid="add-to-cart"]').trigger('click');

    expect(productStore.addToCart).toHaveBeenCalledTimes(1);
  });

  it('should calls the correct action when button pagnation previous product is clicked', async () => {
    wrapper.find('[data-testid="previous-product"]').trigger('click');

    expect(countProductStore.previousProductCount).toHaveBeenCalledTimes(1);

    expect(useRouter().push).toHaveBeenCalledTimes(1);
    expect(useRouter().push).toHaveBeenCalledWith(
      `/products/${countProductStore.countProduct}`
    );
  });

  it('should calls the correct action when button pagnation next product is clicked', async () => {
    wrapper.find('[data-testid="next-product"]').trigger('click');

    expect(countProductStore.nextProductCount).toHaveBeenCalledTimes(1);

    expect(useRouter().push).toHaveBeenCalledTimes(1);
    expect(useRouter().push).toHaveBeenCalledWith(
      `/products/${countProductStore.countProduct}`
    );
  });
});
