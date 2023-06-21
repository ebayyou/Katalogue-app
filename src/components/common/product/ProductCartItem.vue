<script setup>
import { storeToRefs } from "pinia";
import useProductStore from "../../../stores/product";
import ProductCartCount from "./ProductCartCount.vue";

const productStore = useProductStore();
const { cartProducts, quantityProducts } = storeToRefs(productStore);
console.log(cartProducts.value, quantityProducts.value);
</script>

<template>
  <div v-for="cart in cartProducts" :key="cart.id" class="product__item__cart">
    <div class="product__group product__flex">
      <img class="product__img" :src="cart.image" :alt="cart.title" />

      <div class="product__info">
        <h4>{{ cart.title }}</h4>

        <div class="product__flex">
          <p class="price">${{ cart.price }}</p>
          <p class="id">{{ cart.id }}</p>
        </div>
      </div>
    </div>

    <ProductCartCount />
  </div>
</template>

<style scoped>
.product__item__cart {
  padding: 0.8em;
  border-bottom: 2px solid rgba(193, 193, 193, 0.45);
}

.product__flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}

.product__group {
  width: 80%;
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
  font-size: var(--fs-text-md);
  line-height: 21px;
  margin-bottom: 0.3em;
}

.product__info .id {
  font-style: normal;
  font-weight: var(--font-regular);
  font-size: var(--fs-text-xs);
  line-height: 18px;
  padding: 5px;
  background: var(--primary-blue);
  color: var(--white);
  border-radius: 3px;
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
