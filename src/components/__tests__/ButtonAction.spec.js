import { vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ButtonAction from '../common/button/ButtonAction.vue';

const mockHandlerEvent = vi.fn();
const mockIsActiveCart = false;

describe('unit testing Button Action for dynamic button as needed', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(ButtonAction, {
      props: {
        handlerEvent: mockHandlerEvent,
        isActiveCart: mockIsActiveCart,
        dataTestId: 'add-to-cart',
        iconName: 'ShoppingCart',
        action: 'Add to Cart',
      },
    });
  });

  afterEach(() => wrapper.unmount());

  it('should call the handler event prop function when the button is clicked', async () => {
    const button = wrapper.find('[data-testid="add-to-cart"');

    await button.trigger('click');

    expect(mockHandlerEvent).toHaveBeenCalled();
  });

  it('should render the correct action text', () => {
    const actionText = wrapper.find('[data-testid="button-action-text"');
    expect(actionText.text()).toBe('Add to Cart');
  });
});
