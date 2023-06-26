import { createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import { beforeEach, describe, it } from "vitest";
import ProductsView from "../../views/ProductsView.vue";

describe("display correctly single product in product view page", () => {
  beforeEach(() => {
    const app = createApp(App);
    const pinia = createPinia();

    app.use(pinia);
  });

  it.fails("should have expected to show the single product", async () => {
    render(ProductsView);

    const image = await screen.findByTestId("test-render-image");
    const title = await screen.findByTestId("test-render-title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    );
    expect(image).toHaveAttribute(
      "alt",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
  });
});
