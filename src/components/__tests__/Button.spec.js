import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonAction from '../common/button/ButtonAction.vue';
import ButtonPagnation from '../common/button/ButtonPagnation.vue';

describe('unit testing button component for action functionality', () => {
  it.skip('should display a success alert when the add to cart button is clicked', async () => {
    // arrange
    mount(ButtonAction, {
      props: {
        handlerEvent: () => {},
        isActiveCart: false,
        disabled: false,
        iconName: 'ShoppingCart',
        action: 'Add to Cart',
      },
    });

    // const button = await screen.findByText('Add to Cart');

    // action
    // await fireEvent.click(button);

    // assert
    expect(button.innerHTML).toBe('Add to Cart');
  });

  it.skip('should display the next product when the user clicks the next product button', async () => {
    const buttonId = 'next-product';
    mount(ButtonPagnation, {
      props: {
        iconName: 'ArrowRight2',
        pagnationEvent: () => {},
        dataTestId: buttonId,
      },
    });

    // const nextProduct = await screen.findByTestId(buttonId);

    // await fireEvent.click(nextProduct);

    expect(nextProduct.nodeName).toBe('BUTTON');
  });

  it.skip('should display the previous product when the user clicks the previous product button', async () => {
    const buttonId = 'previous-product';
    mount(ButtonPagnation, {
      props: {
        iconName: 'ArrowLeft2',
        pagnationEvent: () => {},
        dataTestId: buttonId,
      },
    });

    // const previousProduct = await screen.findByTestId(buttonId);

    // await fireEvent.click(previousProduct);

    expect(previousProduct.nodeName).toBe('BUTTON');
  });
});
