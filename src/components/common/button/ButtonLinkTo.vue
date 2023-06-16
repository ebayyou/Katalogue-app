<script setup>
import { vsxIcon } from "vue-iconsax";
import { RouterLink } from "vue-router";

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
    <vsx-icon
      v-show="iconName"
      :iconName="iconName"
      :size="24"
      color="#ffffff"
      type="linear"
    />
    <h5>{{ action }}</h5>
  </RouterLink>
</template>

<style scoped>
.button__linkto {
  display: block;
  width: 145px;
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
  color: var(--primary-purple);
}

@media screen and (min-width: 600px) {
  .button__linkto {
    width: 155px;
  }
}
</style>
