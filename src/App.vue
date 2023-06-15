<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import LayoutBackgroud from "./components/layout/LayoutBackgroud.vue";
import NavigationBar from "./components/common/NavigationBar.vue";
import BreadCrumbs from "./components/common/BreadCrumbs.vue";
// import InitialLoadingUI from "./components/common/InitialLoadingUI.vue";

const breadcrumbs = ref([
  {
    key: 1,
    path: "/",
    name: "Katalogue",
  },
  {
    key: 2,
    path: "/",
    name: "Product",
  },
  {
    key: 3,
    path: "/mens-catalog",
    name: "Men's Clothing",
  },
]);
</script>

<template>
  <!-- <InitialLoadingUI /> -->

  <LayoutBackgroud>
    <template #navbar>
      <NavigationBar />
      <div class="navbar__bread">
        <BreadCrumbs :breadcrumbs="breadcrumbs" />
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
