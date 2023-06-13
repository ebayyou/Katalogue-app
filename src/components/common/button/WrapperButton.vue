<script setup>
defineProps({
  opsi: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <div class="wrapper__button" :class="opsi === 1 ? 'opsi-1' : 'opsi-2'">
    <div class="button__group" :class="opsi === 1 ? 'opsi-1' : 'opsi-2'">
      <slot name="button-opsi-1"></slot>
      <slot name="button-opsi-2"></slot>
    </div>
  </div>
</template>

<style scoped>
.wrapper__button {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.95em;
  width: 100%;
  height: 90px;
  padding: 5px 0px 0px;
  background-color: var(--white);
  border-top: 1px solid rgba(50, 48, 50, 0.32);
}

.button__group {
  display: flex;
  align-items: center;
  width: 90%;
}

.button__group.opsi-1 {
  justify-content: center;
}

.button__group.opsi-2 {
  justify-content: space-between;
}

@media screen and (min-width: 1024px) {
  .wrapper__button {
    position: unset;
    justify-content: flex-start;
    height: 65px;
    margin-top: 2em;
  }
  .wrapper__button.opsi-1 {
    position: absolute;
  }

  .button__group.opsi-1 {
    width: 100%;
  }

  .button__group.opsi-2 {
    justify-content: flex-start;
    gap: 1.5em;
  }
}

@media screen and (min-width: 1440px) {
  .wrapper__button {
    position: absolute;
    bottom: 0;
    margin-top: 0;
  }
}
</style>
