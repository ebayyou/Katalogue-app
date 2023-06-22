<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { Shop } from "vue-iconsax";
import useCountProductStore from "../../../stores/countProduct";

const countProductStore = useCountProductStore();
const { countProduct } = storeToRefs(countProductStore);
</script>

<template>
  <div class="wrap__empty">
    <div class="group__flex">
      <img
        class="empty__illustration"
        src="../../../assets/Image/Illustration-nothing-cart.svg"
        alt="empty-cart"
      />

      <div class="empty__text">
        <h3>Wow, your cart is empty</h3>
        <p>let's fill it with your dream stuff</p>
      </div>
    </div>

    <RouterLink
      class="group__flex empty__link"
      :to="`/products/${countProduct}`"
    >
      <Shop color="#fff" :size="24" type="linear" />
      <h5>Continue shopping</h5>
    </RouterLink>
  </div>
</template>

<style scoped>
.wrap__empty {
  margin-top: 5em;
}

.group__flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.empty__illustration {
  width: 127px;
  height: 100px;
}
.empty__text h3 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-md);
  line-height: 24px;
}
.empty__text p {
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: var(--fs-text-xs);
  line-height: 18px;
  color: var(--neutral-gray);
}
.empty__link {
  width: 252px;
  height: 40px;
  margin: 1.5em auto 0;
  background: var(--primary-purple);
  border-radius: var(--radius-sm);
}
.empty__link h5 {
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--white);
}
</style>
