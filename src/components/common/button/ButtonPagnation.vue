<script setup>
import { vsxIcon } from "vue-iconsax";

defineProps({
  iconName: String,
  type: String,
});
</script>

<template>
  <button
    class="button__pagnation"
    :class="
      (iconName === 'ArrowLeft2' ? 'pagnation-left' : 'pagnation-right', type)
    "
  >
    <vsx-icon
      v-show="!type"
      :iconName="iconName"
      :size="24"
      color="#ffffff"
      type="linear"
    />
  </button>
</template>

<style scoped>
.button__pagnation {
  width: 50px;
  height: 50px;
  background: var(--primary-purple);
  border: none;
}
.button__pagnation.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}
.pagnation-left {
  border-radius: 5px 0px 0px 5px;
}
.pagnation-right {
  border-radius: 0px 5px 5px 0px;
}
</style>
