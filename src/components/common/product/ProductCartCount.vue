<script setup>
import { ref, computed } from "vue";
import { Minus, Add, Trash } from "vue-iconsax";

const count = ref(1);
const disabledMin = computed(() => count.value === 1);
const disabledPlus = computed(() => count.value >= 20);
</script>

<template>
  <div class="product__cart-count">
    <p>Items that have been purchased cannot be returned</p>

    <div class="group__cart-count">
      <button type="button" class="btn__count">
        <Trash :size="24" color="#C1C1C1" type="linear" />
      </button>

      <div class="count__group">
        <button
          class="btn__count"
          type="button"
          :disabled="disabledMin"
          @click="count -= 1"
        >
          <Minus />
        </button>

        <span class="count">{{ count }}</span>

        <button
          class="btn__count"
          type="button"
          :disabled="disabledPlus"
          @click="count += 1"
        >
          <Add />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button:disabled {
  color: #c1c1c1;
}
button {
  color: var(--primary-purple);
}

.product__cart-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
}

.group__cart-count {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}

.count__group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92px;
  height: 37px;
  background: var(--white);
  border: 1px solid #c1c1c1;
  border-radius: 4px;
}

.product__cart-count p {
  font-weight: var(--font-reguler);
  font-size: 10px;
  line-height: 12px;
  color: var(--primary-blue);
  width: 50%;
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

@media screen and (min-width: 600px) {
  .product__cart-count p {
    font-size: 12px;
    width: 60%;
  }
}
</style>
