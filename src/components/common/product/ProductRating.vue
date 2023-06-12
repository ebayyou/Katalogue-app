<script setup>
import { Star1 } from 'vue-iconsax';
</script>

<template>
  <div class="product__group">
    <div class="star__group">
      <Star1 :size="24" color="#FFB039" type="bold" />
      <Star1 :size="24" color="#FFB039" type="bold" />
      <Star1 :size="24" color="#FFB039" type="bold" />
      <Star1 :size="24" color="#FFB039" type="linear" />
      <Star1 :size="24" color="#FFB039" type="linear" />
    </div>
    <h5 class="product__text">3.9</h5>
  </div>
</template>

<style scoped>
.star__group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
