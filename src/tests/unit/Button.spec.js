import { render, fireEvent, screen } from "@testing-library/vue";
import { describe, it } from "vitest";
import ButtonAction from "../../components/common/button/ButtonAction.vue";
import ButtonPagnation from "../../components/common/button/ButtonPagnation.vue";

describe("unit testing button component for action functionality", () => {
  it("user can click button action for add to cart", async () => {
    // arrange
    render(ButtonAction, {
      props: {
        handlerEvent: () => {},
        isActiveCart: false,
        disabled: false,
        iconName: "ShoppingCart",
        action: "Add to Cart",
      },
    });

    const button = await screen.findByText("Add to Cart");

    // action
    await fireEvent.click(button);

    // assert
    expect(button.innerHTML).toBe("Add to Cart");
  });

  it("user can click button pagination for the next product", async () => {
    const buttonId = "next-product";
    render(ButtonPagnation, {
      props: {
        iconName: "ArrowRight2",
        pagnationEvent: () => {},
        dataTestId: buttonId,
      },
    });

    const nextProduct = await screen.findByTestId(buttonId);

    await fireEvent.click(nextProduct);

    // expect(nextProduct.id).toBe(buttonId);
    expect(nextProduct.nodeName).toBe("BUTTON");
  });

  it("user can click button pagination for the previous product", async () => {
    const buttonId = "previous-product";
    render(ButtonPagnation, {
      props: {
        iconName: "ArrowLeft2",
        pagnationEvent: () => {},
        dataTestId: buttonId,
      },
    });

    const previousProduct = await screen.findByTestId(buttonId);

    await fireEvent.click(previousProduct);

    // expect(previousProduct.id).toBe(buttonId);
    expect(previousProduct.nodeName).toBe("BUTTON");
  });
});
