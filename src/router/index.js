import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import ProductCartView from "../views/ProductCartView.vue";
import ProductConfirmOrder from "../views/ProductConfirmOrder.vue";
import ProductGreetingView from "../views/ProductGreetingView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-products",
      component: ProductsView,
    },
    {
      path: "/products/:id",
      name: "product-id",
      component: ProductsView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
      children: [
        {
          path: "cart-product",
          name: "cart",
          component: ProductCartView,
        },
        {
          path: "confirm-order",
          name: "confirm-order",
          component: ProductConfirmOrder,
        },
        {
          path: "greetings",
          name: "greetings",
          component: ProductGreetingView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  ],
});

const isLoadingInitial = ref(true);

router.beforeEach(() => {
  isLoadingInitial.value = true;
});

router.afterEach(() => {
  isLoadingInitial.value = false;
});

export default router;

export { isLoadingInitial };
