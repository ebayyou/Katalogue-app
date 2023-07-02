<script setup>
import { storeToRefs } from "pinia";
import useProductStore from "../../stores/product";

const productStore = useProductStore();
const { backgroundProduct } = storeToRefs(productStore);
</script>

<template>
  <div class="layout__background" :class="`${backgroundProduct.value}-lg`">
    <div class="layout__pattern">
      <slot name="navbar"></slot>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1250px) {
  .background {
    background: var(--gradient-men);
  }

  .layout__background {
    position: relative;
    width: 100%;
    height: 50vh;
  }
  .layout__pattern {
    width: 100%;
    height: 50vh;
    background: url("../../assets/Image/Background-pattern.svg") center;
  }
}
</style>
