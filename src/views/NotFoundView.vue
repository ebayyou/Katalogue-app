<script setup>
import ErrorUI from "../components/common/ErrorUI.vue";
import LayoutProduct from "../components/layout/LayoutProduct.vue";
</script>

<template>
  <LayoutProduct type="errorLayout">
    <template #error-product>
      <ErrorUI
        :errorCode="404"
        errorMsg="Sorry, The page You are looking for could not be found"
      />
    </template>
  </LayoutProduct>
</template>

<style></style>
