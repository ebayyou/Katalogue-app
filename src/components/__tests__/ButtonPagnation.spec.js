import { shallowMount } from '@vue/test-utils';
import ButtonPagnation from '../common/button/ButtonPagnation.vue';
import { expect, vi } from 'vitest';

const mockPagnationEvent = vi.fn();

describe('unit testing Button pagnation', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(ButtonPagnation, {
      props: {
        pagnationEvent: mockPagnationEvent,
        dataTestId: 'next-product',
        iconName: 'ArrowRight2',
      },
    });
  });

  afterEach(() => wrapper.unmount());

  it('should call the handler event prop function when the button is clicked', async () => {
    const button = wrapper.find('[data-testid="next-product"]');

    await button.trigger('click');

    expect(mockPagnationEvent).toHaveBeenCalled();
  });

  it('should render the correct title text', () => {
    const title = wrapper.find('[title="next-product"]');
    expect(title.attributes('title')).toBe('next-product');
  });
});
