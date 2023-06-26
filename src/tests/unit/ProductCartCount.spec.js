import { createApp } from "vue";
import { createPinia } from "pinia";
import { render, fireEvent, screen } from "@testing-library/vue";
import { beforeEach, describe, it } from "vitest";
import App from "../../App.vue";
import ProductCartCount from "../../components/common/product/ProductCartCount.vue";

describe("unit testing ProductCartCount for cart product page", () => {
  beforeEach(() => {
    const app = createApp(App);
    const pinia = createPinia();

    app.use(pinia);
  });

  it("user can delete product in cart", async () => {
    render(ProductCartCount, {
      props: {
        productId: "id-1",
      },
    });

    const buttonDeleteProduct = await screen.findByTestId("delete-product");

    await fireEvent.click(buttonDeleteProduct);

    expect(buttonDeleteProduct.nodeName).toBe("BUTTON");
  });

  it("user can update product to add quantity product", async () => {
    render(ProductCartCount, {
      props: {
        productId: "id-1",
      },
    });

    const buttonAddCount = await screen.findByTestId("add-count");

    await fireEvent.click(buttonAddCount);

    expect(buttonAddCount.nodeName).toBe("BUTTON");
  });

  it("user can update product to remove quantity product", async () => {
    render(ProductCartCount, {
      props: {
        productId: "id-1",
      },
    });

    const buttonRemoveCount = await screen.findByTestId("remove-count");

    await fireEvent.click(buttonRemoveCount);

    expect(buttonRemoveCount.nodeName).toBe("BUTTON");
  });
});
