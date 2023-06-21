<script setup>
import { vsxIcon } from "vue-iconsax";
import { RouterLink } from "vue-router";

defineProps({
  iconName: {
    type: String,
    default: "",
  },
  action: String,
  to: String,
});
</script>

<template>
  <RouterLink :to="to" :class="iconName ? 'button__action' : 'button__linkto'">
    <vsx-icon
      v-if="iconName"
      :iconName="iconName"
      :size="24"
      color="#ffffff"
      type="linear"
    />
    <h5>{{ action }}</h5>
  </RouterLink>
</template>
