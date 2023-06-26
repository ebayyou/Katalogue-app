import { createApp } from "vue";
import { createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import { beforeEach, describe, it } from "vitest";
import ProductConfirmOrder from "../../views/ProductConfirmOrder.vue";
import App from "../../App.vue";

const pinia = createPinia();

describe("display correctly list product item in product confirm order page", () => {
  beforeEach(() => {
    const app = createApp(App);

    app.use(pinia);
  });

  it.fails("should have expected to show a correct list of products in order-confirm page", async () => {
    const wrapper = mount(ProductConfirmOrder, {
      global: {
        plugins: [pinia],
      },
    });

    render(wrapper);
  });
});
