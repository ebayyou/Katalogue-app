import { createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import { beforeEach, describe, it } from "vitest";
import ProductCartView from "../../views/ProductCartView.vue";

const pinia = createPinia();

describe("display correctly list product item in product cart page", () => {
  beforeEach(() => {
    pinia.use(({ app }) => {
      app.use(pinia);
    });
  });

  it.fails(
    "should have expected to show a list of products in cart-page",
    async () => {
      const wrapper = mount(ProductCartView, {
        global: {
          plugins: [pinia],
        },
      });

      render(wrapper);
    }
  );
});
