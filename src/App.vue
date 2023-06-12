<script setup>
import { RouterView } from 'vue-router';
import LayoutBackgroud from './components/layout/LayoutBackgroud.vue';
import NavigationBar from './components/common/NavigationBar.vue';
</script>

<template>
  <LayoutBackgroud>
    <template #navbar>
      <NavigationBar />
    </template>
  </LayoutBackgroud>

  <RouterView />
</template>

<style scoped></style>
