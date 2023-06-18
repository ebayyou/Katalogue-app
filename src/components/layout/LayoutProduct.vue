<script setup>
import ButtonPagnation from "../common/button/ButtonPagnation.vue";

defineProps({
  type: {
    type: String,
    default: "",
  },
  pagnationNext: Function,
  pagnationPrevious: Function,
});
</script>

<template>
  <main class="layout__product-wrapper">
    <section class="layout__product">
      <div class="layout__button">
        <ButtonPagnation
          :type="type"
          :pagnationEvent="pagnationPrevious"
          iconName="ArrowLeft2"
        />
        <ButtonPagnation
          :type="type"
          :pagnationEvent="pagnationNext"
          iconName="ArrowRight2"
        />
      </div>

      <slot name="error-product"></slot>

      <div
        class="product__wrapper"
        :class="type === 'errorLayout' && 'errorLayout'"
      >
        <slot name="left-product"></slot>
        <slot name="right-product"></slot>
      </div>
    </section>
  </main>
</template>

<style scoped>
.layout__product {
  background-color: var(--white);
}

.layout__button {
  display: none;
}

.product__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5em;
  margin: 1.35em 0 6em;
}
.product__wrapper.errorLayout {
  display: none;
}

@media screen and (min-width: 768px) {
  .product__wrapper {
    width: 500px;
    margin: 1em auto;
  }
}

@media screen and (min-width: 1024px) {
  .product__wrapper {
    margin-top: 3em;
    width: 700px;
  }
}

@media screen and (min-width: 1250px) {
  .layout__product-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    align-items: center;
  }

  .layout__product {
    position: relative;
    width: 90%;
    margin: 0 auto;
    border-radius: var(--radius-md);
    box-shadow: var(--box-shadow-bg);
  }

  .layout__button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    margin: 0 auto;
  }

  .product__wrapper {
    margin: 1em auto;
  }
}

@media screen and (min-width: 1440px) {
  .product__wrapper {
    width: 80%;
    flex-direction: row;
  }

  .layout__product {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1224px;
    height: 637px;
  }
}
</style>
