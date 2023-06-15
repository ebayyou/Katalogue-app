<script setup>
import { ArrowLeft2 } from "vue-iconsax";
import { RouterLink } from "vue-router";

defineProps({
  name: String,
  path: {
    type: String,
    default: "/",
  },
  withLogo: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nav class="application__bar">
    <RouterLink :to="path" class="bar">
      <ArrowLeft2 :size="24" color="#fff" type="linear" />
    </RouterLink>

    <img
      v-if="withLogo"
      class="bar__logo"
      src="../../assets/Image/Logo Brand.svg"
      alt="logo-brand"
    />
    <h2 v-else class="heading__text-gradient">{{ name }}</h2>
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

.bar__logo {
  width: 125px;
}

.application__bar h2 {
  font-size: 22px;
}
</style>
