import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import ProductCartView from '../views/ProductCartView.vue';
import ProductConfirmOrder from '../views/ProductConfirmOrder.vue';
import ProductGreetingView from '../views/ProductGreetingView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-products',
      component: ProductsView,
    },
    {
      path: '/products/:id',
      name: 'product-id',
      component: ProductsView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductsView,
      children: [
        {
          path: 'cart-product',
          name: 'cart-product',
          component: ProductCartView,
        },
        {
          path: 'confirm-order',
          name: 'confirm-order',
          component: ProductConfirmOrder,
        },
        {
          path: 'greetings',
          name: 'greetings',
          component: ProductGreetingView,
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ],
});

export default router;
