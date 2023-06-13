<script setup>
import { ArrowLeft2 } from 'vue-iconsax';
import { RouterLink } from 'vue-router';

defineProps({
  name: String,
});
</script>

<template>
  <nav class="application__bar">
    <RouterLink to="/" class="bar">
      <ArrowLeft2 :size="24" color="#fff" type="linear" />
    </RouterLink>
    <h3>{{ name }}</h3>
  </nav>
</template>

<style scoped>
.application__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: var(--primary-purple);
  border-radius: 0px 5px 15px 0px;
}

.application__bar h3 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: 22px;
  text-transform: capitalize;
  line-height: 33px;
  background: var(--gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
