<script setup>
import ProductRating from '../components/common/product/ProductRating.vue';
import ProductReview from '../components/common/product/ProductReview.vue';
import LayoutProduct from '../components/layout/LayoutProduct.vue';
</script>

<template>
  <div>
    <LayoutProduct>
      <template #left-product>
        <img class="product__img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" />
      </template>
      <template #right-product>
        <div>
          <h1 class="product__heading">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
          <div class="product__group group__gap">
            <ProductRating />
            <ProductReview />
          </div>
          <h3 class="product__category">men's clothing</h3>
          <p class="product__desc">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        </div>
      </template>
    </LayoutProduct>
  </div>
</template>

<style>
.product__img {
  width: 350px;
  margin: 0 auto;
}

.product__group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}

.product__group.group__gap {
  gap: 1.2em;
}

.product__text {
  font-style: normal;
  font-size: var(--fs-text-md);
  font-weight: var(--font-regular);
}

.product__heading {
  font-style: normal;
  font-size: var(--fs-heading);
  font-weight: var(--font-semi-bold);
}

.product__category {
  font-style: normal;
  font-size: var(--fs-text-lg);
  font-style: italic;
  font-weight: var(--font-medium);
  color: var(--primary-purple);
}

.product__desc {
  font-style: normal;
  font-size: var(--fs-text-md);
  font-weight: var(--font-regular);
}
</style>
