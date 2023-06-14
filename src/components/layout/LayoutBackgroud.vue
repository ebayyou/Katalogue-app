<script setup></script>

<template>
  <div class="layout__backgroud">
    <div class="layout__pattern">
      <slot name="navbar"></slot>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1250px) {
  .layout__backgroud {
    position: relative;
    width: 100%;
    height: 50vh;
    background: var(--gradient-men);
  }
  .layout__pattern {
    width: 100%;
    height: 50vh;
    background: url('../../assets/Image/Backgroud-pattern.svg') center;
  }
}
</style>
