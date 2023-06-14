<script setup></script>

<template>
  <div class="confirm__product-item">
    <div class="product__info">
      <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
      <p>Quantity: 12</p>
    </div>

    <h4 class="product__price">$1200</h4>
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
