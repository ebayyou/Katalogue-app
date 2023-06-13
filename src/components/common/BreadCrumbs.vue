<script setup>
import { ArrowRight2 } from 'vue-iconsax';
import { RouterLink } from 'vue-router';

defineProps({
  breadcrumbs: Array,
});
</script>

<template>
  <div class="breadcrumbs">
    <div v-for="item in breadcrumbs" :key="item.key" class="bread__item">
      <RouterLink class="bread__link" to="/">{{ item.name }}</RouterLink>
      <ArrowRight2 v-show="item.key !== breadcrumbs.length" class="bread__icon" />
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
  line-height: 21px;
  color: var(--neutral-gray);
}

.bread__icon {
  width: 20px;
  height: 20px;
  color: var(--neutral-gray);
}
</style>
