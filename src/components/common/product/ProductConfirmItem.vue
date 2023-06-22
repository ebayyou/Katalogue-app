<script setup>
defineProps({
  products: Array,
});
</script>

<template>
  <div
    v-for="product in products"
    :key="product.productId"
    class="confirm__product-item"
  >
    <div class="product__info">
      <h4>{{ product.title }}</h4>
      <p>Quantity: {{ product.quantity }}</p>
    </div>

    <h4 class="product__price">${{ product.quantity * product.price }}</h4>
  </div>
</template>

<style scoped>
.confirm__product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product__info {
  width: 65%;
}

.product__info h4 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-md);
  line-height: 24px;
  margin-bottom: 0.2em;
}

.product__info p {
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-text-sm);
  line-height: 21px;
  color: #323032;
}

.product__price {
  font-style: normal;
  font-size: var(--fs-text-lg);
  font-weight: var(--font-semi-bold);
  line-height: 21px;
  color: var(--primary-purple);
}
</style>
