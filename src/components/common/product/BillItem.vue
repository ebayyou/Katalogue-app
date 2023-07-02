<script setup>
defineProps({
  name: String,
  price: Number,
  type: String,
});
</script>

<template>
  <div class="bill__item">
    <h4 :class="type === 'bold' && 'bold'">{{ name }}</h4>
    <p :class="type === 'bold' && 'bold'">${{ price }}</p>
  </div>
</template>

<style scoped>
.bill__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.bill__item h4 {
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--neutral-gray);
}

.bill__item p {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-sm);
  line-height: 21px;
}

.bill__item h4.bold {
  font-weight: var(--font-semi-bold);
  font-size: 20px;
  color: var(--neutral-black);
}

.bill__item p.bold {
  font-weight: var(--font-semi-bold);
  font-size: 18px;
}
</style>
