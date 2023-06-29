<script setup>
import { onMounted } from 'vue';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useProductStore from '../stores/product';
import ButtonAction from '../components/common/button/ButtonAction.vue';
import ProductCartItem from '../components/common/product/ProductCartItem.vue';
import ProductNothingInCart from '../components/common/product/ProductNothingInCart.vue';
import LayoutProductShopping from '../components/layout/LayoutProductShopping.vue';

defineEmits(['pointerenter', 'pointerleave']);

const productStore = useProductStore();
const router = useRouter();

const { quantityProducts } = storeToRefs(productStore);

onMounted(() => productStore.getCartProducts());

const nothingProductInCart = computed(
  () => quantityProducts.value?.length === 0
);

const generateComfirmOrder = () => {
  router.push('/product/confirm-order');
};
</script>

<template>
  <LayoutProductShopping :opsiButton="1" headingBarName="Your Shopping Cart">
    <template #product-shopping-content>
      <div class="product__wrapper-list">
        <ProductNothingInCart v-if="nothingProductInCart" />

        <ProductCartItem v-else />
      </div>
    </template>

    <template #button-group>
      <ButtonAction
        data-test-id="buys-product"
        :handlerEvent="generateComfirmOrder"
        :disabled="nothingProductInCart"
        iconName="ReceiptItem"
        action="Buys"
      />
    </template>
  </LayoutProductShopping>
</template>

<style>
.product__wrapper-list {
  margin: 3em 0 7em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.2em;
}

@media screen and (min-width: 600px) {
  .product__wrapper-list {
    width: 500px;
    margin: 3rem auto;
  }
}

@media screen and (min-width: 1024px) {
  .product__wrapper-list {
    width: 100%;
    margin: 3em 0 12em;
    overflow-y: scroll;
  }

  .product__wrapper-list::-webkit-scrollbar {
    width: 0;
  }
}
@media screen and (min-width: 1440px) {
  .product__wrapper-list {
    height: 80vh;
  }
}
</style>
