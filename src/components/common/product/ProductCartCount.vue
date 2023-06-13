<script setup>
import { ref, computed } from 'vue';
import { Minus, Add } from 'vue-iconsax';

const count = ref(1);
const disabledMin = computed(() => count.value === 1);
const disabledPlus = computed(() => count.value >= 20);
</script>

<template>
  <div class="product__cart__count">
    <button class="btn__count" type="button" :disabled="disabledMin" @click="count -= 1">
      <Minus />
    </button>

    <span class="count">{{ count }}</span>

    <button class="btn__count" type="button" :disabled="disabledPlus" @click="count += 1">
      <Add />
    </button>
  </div>
</template>

<style scoped>
.product__cart__count {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn__count {
  background: transparent;
}

.count {
  width: 20px;
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: 18px;
  line-height: 27px;
  text-align: center;
}
</style>
