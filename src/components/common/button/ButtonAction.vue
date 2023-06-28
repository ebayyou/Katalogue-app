<script setup>
import { vsxIcon } from 'vue-iconsax';

const props = defineProps({
  handlerEvent: Function,
  disabled: {
    type: Boolean,
    default: false,
  },
  isActiveCart: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: '',
  },
  action: String,
  dataTestId: String,
});
</script>

<template>
  <button
    type="button"
    :data-testId="dataTestId"
    :class="iconName ? 'button__action' : 'button__linkto'"
    @click="handlerEvent"
    :disabled="disabled"
  >
    <vsx-icon
      v-if="iconName"
      :iconName="iconName"
      :size="24"
      :color="disabled ? '#323032' : '#ffffff'"
      :type="isActiveCart ? 'bold' : 'linear'"
    />
    <h5>{{ action }}</h5>
  </button>
</template>
