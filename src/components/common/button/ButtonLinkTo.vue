<script setup>
import { vsxIcon } from 'vue-iconsax';
import { RouterLink } from 'vue-router';

defineProps({
  iconName: {
    type: String,
    default: null,
  },
  action: String,
  to: String,
});
</script>

<template>
  <RouterLink :to="to" :class="iconName ? 'button__action' : 'button__linkto'">
    <vsx-icon v-show="iconName" :iconName="iconName" :size="24" color="#ffffff" type="linear" />
    <h5>{{ action }}</h5>
  </RouterLink>
</template>

<style scoped>
.button__linkto {
  display: block;
  width: 155px;
  height: 44px;
  border: 2px solid var(--primary-purple);
  border-radius: var(--radius-circle);
}

.button__linkto h5 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-lg);
  text-align: center;
  line-height: 40px;
  color: var(--neutral-black);
}

.button__action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.95em;
  width: 190px;
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

@media screen and (min-width: 1024px) {
  .button__action {
    width: 200px;
  }
}
</style>
