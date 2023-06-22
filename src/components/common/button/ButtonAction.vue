<script setup>
import { vsxIcon } from "vue-iconsax";

const props = defineProps({
  iconName: {
    type: String,
    default: "",
  },
  isActiveCart: {
    type: Boolean,
    default: false,
  },
  action: String,
  handlerEvent: Function,
});
</script>

<template>
  <button
    type="button"
    :class="iconName ? 'button__action' : 'button__linkto'"
    @click="handlerEvent"
  >
    <vsx-icon
      v-if="iconName"
      :iconName="iconName"
      :size="24"
      color="#ffffff"
      :type="isActiveCart ? 'bold' : 'linear'"
    />
    <h5>{{ action }}</h5>
  </button>
</template>
