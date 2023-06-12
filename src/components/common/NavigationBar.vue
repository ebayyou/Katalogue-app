<script setup>
import { ShoppingCart } from 'vue-iconsax';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navigation">
    <RouterLink to="/" class="navigation__brand">
      <img src="../../assets/Image/Logo Brand.svg" alt="logo-brand" />
    </RouterLink>

    <RouterLink to="/cart-product" class="navigation__group">
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

.navigation__group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: var(--gradient-logo);
  border-radius: var(--radius-sm);
  color: var(--white);
}

.navigation__group .icon-cart {
  color: var(--white);
}

@media (min-width: 1024px) {
  .navigation {
    position: absolute;
    left: 0;
    right: 0;
    margin: 1rem auto;
    width: 95%;
    z-index: 10;
  }
}
</style>
