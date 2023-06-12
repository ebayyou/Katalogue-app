<script setup>
import ButtonPagnation from '../common/button/ButtonPagnation.vue';
</script>

<template>
  <main class="layout__product-wrapper">
    <section class="layout__product">
      <div class="layout__button">
        <ButtonPagnation iconName="ArrowLeft2" />
        <ButtonPagnation iconName="ArrowRight2" />
      </div>

      <div class="product__wrapper">
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

@media screen and (min-width: 1024px) {
  .product__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.2em;
    margin: 1rem auto;
    width: 80%;
  }

  .layout__product-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
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
}

@media screen and (min-width: 1440px) {
  .product__wrapper {
    flex-direction: row;
  }

  .layout__product {
    width: 1224px;
    height: 637px;
  }
}
</style>
