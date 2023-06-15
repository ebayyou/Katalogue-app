<script setup>
import { vsxIcon } from "vue-iconsax";

defineProps({
  iconName: String,
  action: String,
});
</script>

<template>
  <button class="button__action">
    <vsx-icon :iconName="iconName" :size="24" color="#ffffff" type="linear" />
    <h5>{{ action }}</h5>
  </button>
</template>
