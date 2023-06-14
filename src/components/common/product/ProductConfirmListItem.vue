<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="confirm__wrapper">
    <div class="confirm__header-item">
      <h3 class="heading__text-gradient">{{ name }}</h3>
    </div>

    <slot name="list-item"></slot>
  </div>
</template>

<style scoped>
.confirm__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1em;
  width: 100%;
}

.confirm__header-item {
  width: 100%;
  padding: 0.2em 0px;
  height: 40px;
  border-bottom: 1px solid rgba(50, 48, 50, 0.32);
}

.confirm__header-item h2 {
  font-size: 20px;
}
</style>
