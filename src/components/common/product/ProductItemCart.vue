<script setup>
import ProductCartCount from './ProductCartCount.vue';
</script>

<template>
  <div class="product__item__cart">
    <div class="product__group">
      <img class="product__img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" />

      <div class="product__info">
        <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
        <p class="id">id-1</p>
        <p class="price">$ 109.95</p>
      </div>
    </div>

    <ProductCartCount />
  </div>
</template>

<style scoped>
.product__item__cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8em;
  border-bottom: 1px solid rgba(50, 48, 50, 0.32);
}

.product__group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6em;
}

.product__img {
  width: 65px;
}

.product__info {
  width: 75%;
}

.product__info h4 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-sm);
  line-height: 21px;
}

.product__info .id {
  font-style: normal;
  font-weight: var(--font-regular);
  font-size: var(--fs-text-xs);
  line-height: 18px;
}

.product__info .price {
  margin-top: 0.4em;
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--primary-purple);
}
</style>
