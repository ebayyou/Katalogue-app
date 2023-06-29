<script setup>
import { ShoppingCart } from 'vue-iconsax';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navigation">
    <RouterLink to="/" class="navigation__brand">
      <img src="../../assets/Image/Logo Brand.svg" alt="logo-brand" />
    </RouterLink>

    <RouterLink to="/product/cart-product" class="navigation__cart">
      <ShoppingCart class="icon-cart" :size="24" type="bold" />
    </RouterLink>
  </nav>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation__brand {
  width: 125px;
}

.navigation__cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: var(--gradient-logo);
  border-radius: var(--radius-sm);
  color: var(--white);
}

.navigation__cart .icon-cart {
  color: var(--white);
}

@media (min-width: 1024px) {
  .navigation {
    margin: 1rem auto;
    width: 95%;
  }
}

@media (min-width: 1250px) {
  .navigation {
    position: absolute;
    left: 0;
    right: 0;
    max-width: 1536px;
    margin: 1rem auto;
    z-index: 10;
  }
}
</style>
