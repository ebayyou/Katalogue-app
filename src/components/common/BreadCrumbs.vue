<script setup>
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { ArrowRight2 } from 'vue-iconsax';
import useProductStore from '../../stores/product';

const productStore = useProductStore();
const { product } = storeToRefs(productStore);

const breadcrumbs = reactive([
  {
    key: 1,
    name: 'Katalogue',
  },
  {
    key: 2,
    name: 'Products',
  },
  {
    key: 3,
    name: product.value?.category,
  },
]);
</script>

<template>
  <div class="breadcrumbs">
    <div v-for="item in breadcrumbs" :key="item.key" class="bread__item">
      <p class="bread__link">{{ item.name }}</p>
      <ArrowRight2
        v-show="item.key !== breadcrumbs.length"
        class="bread__icon"
      />
    </div>
  </div>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  gap: 0.5em;
}

.breadcrumbs::-webkit-scrollbar {
  width: 0;
}

.bread__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}

.bread__link {
  font-style: normal;
  font-weight: var(--font-regular);
  font-size: var(--fs-text-sm);
  text-transform: capitalize;
  line-height: 21px;
  color: var(--neutral-gray);
}

.bread__icon {
  width: 20px;
  height: 20px;
  color: var(--neutral-gray);
}
</style>
