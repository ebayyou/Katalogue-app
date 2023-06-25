<script setup>
import { RouterView } from "vue-router";
import LayoutBackgroud from "./components/layout/LayoutBackgroud.vue";
import NavigationBar from "./components/common/NavigationBar.vue";
import BreadCrumbs from "./components/common/BreadCrumbs.vue";
</script>

<template>
  <LayoutBackgroud>
    <template #navbar>
      <NavigationBar />
      <div class="navbar__bread">
        <BreadCrumbs />
      </div>
    </template>
  </LayoutBackgroud>

  <RouterView />
</template>

<style scoped>
.navbar__bread {
  margin-top: 0.4em;
}

@media screen and (min-width: 1024px) {
  .navbar__bread {
    display: none;
  }
}
</style>
