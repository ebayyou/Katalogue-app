<script setup>
import { Message } from "vue-iconsax";

defineProps({
  count: Number,
});
</script>

<template>
  <div class="product__group">
    <Message class="icon-product" color="#808080" type="linear" />
    <h5 class="product__text">{{ count }} Ulasan</h5>
  </div>
</template>
