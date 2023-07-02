<script setup>
import { v4 as uuidv4 } from "uuid";
import { computed } from "vue";
import { Star1 } from "vue-iconsax";

const props = defineProps({
  rating: Number,
});

const ratesUp = computed(() => {
  const index = Number(props.rating.toString().split(".")[0]);
  const ratesUpInArray = new Array(index).fill({ key: uuidv4() });
  return ratesUpInArray;
});

const ratesDown = computed(() => {
  const rating = 5;
  const index = rating - ratesUp.value.length;
  const ratesDownInArray = new Array(index).fill({ key: uuidv4() });
  return ratesDownInArray;
});
</script>

<template>
  <div class="product__group">
    <div class="star__group">
      <Star1
        v-for="rate in ratesUp"
        :key="rate.key"
        class="icon-product"
        color="#FFB039"
        type="bold"
      />
      <Star1
        v-for="rate in ratesDown"
        :key="rate.key"
        class="icon-product"
        color="#FFB039"
        type="linear"
      />
    </div>
    <h5 class="product__text">{{ rating }}</h5>
  </div>
</template>

<style scoped>
.star__group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
