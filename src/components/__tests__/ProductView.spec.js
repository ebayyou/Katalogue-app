import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/vue';
import { shallowMount } from '@vue/test-utils';
import { useRoute } from 'vue-router';
import { createTestingPinia } from '@pinia/testing';
import useProductStore from '../../stores/product';
import ProductsView from '../../views/ProductsView.vue';

// installing Vue Router in tests
vi.mock('vue-router');

describe('display correctly single product in product view page', () => {
  let wrapper = null;
  let store = null;
  const id = '1';

  useRoute.mockReturnValue({
    params: {
      id,
    },
  });

  beforeEach(() => {
    wrapper = shallowMount(ProductsView, {
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
              },
            },
          }),
        ],
      },
    });

    store = useProductStore();
  });

  it('should have expected to show the single product', () => {
    const paragraph = wrapper.findAll('p');
    expect(paragraph[0].text()).toEqual(
      'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
    );
  });
});
