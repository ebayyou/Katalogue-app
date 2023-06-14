<script setup>
// import ButtonAction from '../components/common/button/ButtonAction.vue';
import ButtonLinkTo from '../components/common/button/ButtonLinkTo.vue';
import ProductItemCart from '../components/common/product/ProductItemCart.vue';
import LayoutProductShopping from '../components/layout/LayoutProductShopping.vue';
</script>

<template>
  <LayoutProductShopping :opsiButton="1" headingBarName="Your Shopping Cart">
    <template #product-shopping-content>
      <div class="product__cart-list">
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
      </div>
    </template>

    <template #button-group>
      <ButtonLinkTo to="/confirm-order" iconName="ReceiptItem" action="Confirm Order" />
      <!-- <ButtonAction iconName="ReceiptItem" action="Confirm Order" /> -->
    </template>
  </LayoutProductShopping>
</template>

<style scoped>
.product__cart-list {
  margin: 3em 0 7em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2em;
}

@media screen and (min-width: 1024px) {
  .product__cart-list {
    height: 80vh;
    margin: 3em 0 12em;
    overflow-y: scroll;
  }

  .product__cart-list::-webkit-scrollbar {
    width: 0;
  }
}
</style>
