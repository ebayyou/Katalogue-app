<script setup>
import ApplicationBar from '../components/common/ApplicationBar.vue';
import ButtonAction from '../components/common/button/ButtonAction.vue';
import WrapperButton from '../components/common/button/WrapperButton.vue';
import ProductItemCart from '../components/common/product/ProductItemCart.vue';
</script>

<template>
  <section class="product__cart-wrap">
    <div class="product__cart">
      <ApplicationBar name="Your Shopping Cart" />

      <div class="product__cart-list">
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
        <ProductItemCart />
      </div>

      <WrapperButton :opsi="1">
        <template #button-opsi-1>
          <ButtonAction iconName="ReceiptItem" action="Confirm Order" />
        </template>
      </WrapperButton>
    </div>
  </section>
</template>

<style>
.product__cart-wrap {
  position: absolute;
  z-index: var(--z-fixed);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1em;
  background: var(--white);
}

.product__cart-list {
  margin: 3em 0 7em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2em;
}

@media (min-width: 1024px) {
  .product__cart {
    position: relative;
    right: 0;
    width: 500px;
    height: 100vh;
    padding: 1em;
    background-color: var(--white);
  }

  .product__cart-wrap {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    background: rgba(48, 50, 55, 0.5);
  }

  .product__cart-list {
    height: 80vh;
    margin: 3em 0 12em;
    overflow-y: scroll;
  }

  .product__cart-list::-webkit-scrollbar {
    width: 0;
  }
}

@media (min-width: 1024px) {
  .product__cart {
    width: 570px;
  }
}
</style>
