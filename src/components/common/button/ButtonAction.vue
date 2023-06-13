<script setup>
import { vsxIcon } from 'vue-iconsax';

defineProps({
  iconName: String,
  action: String,
});
</script>

<template>
  <button class="button__action">
    <vsx-icon :iconName="iconName" :size="24" color="#ffffff" type="linear" />
    <h5>{{ action }}</h5>
  </button>
</template>

<style scoped>
.button__action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.95em;
  width: 180px;
  height: 45px;
  background-color: var(--primary-purple);
  border-radius: 35px;
}

.button__action h5 {
  font-style: normal;
  font-weight: var(--font-regular);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--white);
}
</style>
