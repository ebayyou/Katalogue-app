<script setup>
import { ref } from "vue";
import ErrorUI from "./ErrorUI.vue";

const hasError = ref(false);
const errorMessage = ref("");

const errorCaptured = (error, vm, info) => {
  hasError.value = true;
  errorMessage.value = error.message;
  console.log(error, vm, info);

  return false;
};
</script>

<template>
  <ErrorUI v-if="hasError" :errorMsg="errorMessage" :errorCode="404" />
  <div v-else>
    <slot></slot>
  </div>
</template>
