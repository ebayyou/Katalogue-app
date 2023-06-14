<script setup>
import ApplicationBar from '../common/ApplicationBar.vue';
import WrapperButton from '../common/button/WrapperButton.vue';

defineProps({
  opsiButton: Number,
  headingBarName: String,
  withLogo: Boolean,
  type: String,
  path: String,
});
</script>

<template>
  <section class="product__shopping-wrap" :class="type === 'modal' && 'w-modal'">
    <div class="product__shopping" :class="type === 'modal' && 'w-modal'">
      <ApplicationBar :path="path" :name="headingBarName" withLogo />

      <slot name="product-shopping-content"></slot>

      <WrapperButton :opsi="opsiButton">
        <template #button-opsi-1>
          <slot name="button-group"></slot>
        </template>
      </WrapperButton>
    </div>
  </section>
</template>

<style scoped>
.product__shopping-wrap {
  position: absolute;
  z-index: var(--z-fixed);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1em;
  background: var(--white);
}

@media (min-width: 1024px) {
  .product__shopping {
    position: relative;
    right: 0;
    width: 500px;
    height: 100vh;
    padding: 1em;
    background-color: var(--white);
  }

  .product__shopping-wrap {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    background: rgba(48, 50, 55, 0.5);
  }

  .product__shopping-wrap.w-modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product__shopping.w-modal {
    height: 500px;
    border-radius: var(--radius-md);
  }
}

@media (min-width: 1024px) {
  .product__shopping {
    width: 570px;
  }
}
</style>
