<script setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import useProductStore from "../stores/product";
// import ButtonAction from '../components/common/button/ButtonAction.vue';
import ButtonLinkTo from "../components/common/button/ButtonLinkTo.vue";
import ProductItemCart from "../components/common/product/ProductItemCart.vue";
import LayoutProductShopping from "../components/layout/LayoutProductShopping.vue";

defineEmits(["pointerenter", "pointerleave"]);

const productStore = useProductStore();
const { cartProducts } = storeToRefs(productStore);

onBeforeMount(() => {
  productStore.getCartProducts();
});
</script>

<template>
  <LayoutProductShopping :opsiButton="1" headingBarName="Your Shopping Cart">
    <template #product-shopping-content>
      <div class="product__wrapper-list">
        <ProductItemCart v-if="cartProducts?.length !== 0" />
        <div v-else>
          <h3>Nothing Cart</h3>
        </div>
      </div>
    </template>

    <template #button-group>
      <ButtonLinkTo
        to="/products/confirm-order"
        iconName="ReceiptItem"
        action="Confirm Order"
      />
      <!-- <ButtonAction iconName="ReceiptItem" action="Confirm Order" /> -->
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
