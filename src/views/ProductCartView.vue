<script setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { Shop } from "vue-iconsax";
import useProductStore from "../stores/product";
import useCountProductStore from "../stores/countProduct";
// import ButtonAction from '../components/common/button/ButtonAction.vue';
import ButtonLinkTo from "../components/common/button/ButtonLinkTo.vue";
import ProductItemCart from "../components/common/product/ProductItemCart.vue";
import LayoutProductShopping from "../components/layout/LayoutProductShopping.vue";

defineEmits(["pointerenter", "pointerleave"]);

const productStore = useProductStore();
const countProductStore = useCountProductStore();
const { cartProducts } = storeToRefs(productStore);
const { countProduct } = storeToRefs(countProductStore);

onBeforeMount(() => {
  productStore.getCartProducts();
});
</script>

<template>
  <LayoutProductShopping :opsiButton="1" headingBarName="Your Shopping Cart">
    <template #product-shopping-content>
      <div class="product__wrapper-list">
        <ProductItemCart v-if="cartProducts?.length !== 0" />
        <div v-else class="wrap__empty">
          <div class="group__flex">
            <img
              class="empty__illustration"
              src="../assets/Image/Illustration-nothing-cart.svg"
              alt="empty-cart"
            />

            <div class="empty__text">
              <h3>Wow, your cart is empty</h3>
              <p>let's fill it with your dream stuff</p>
            </div>
          </div>

          <RouterLink
            class="group__flex empty__link"
            :to="`/products/${countProduct}`"
          >
            <Shop color="#fff" :size="24" type="linear" />
            <h5>Continue shopping</h5>
          </RouterLink>
        </div>
      </div>
    </template>

    <template #button-group>
      <ButtonLinkTo
        to="/products/confirm-order"
        iconName="ReceiptItem"
        action="Confirm Order"
      />
      <!-- <ButtonAction iconName="ReceiptItem" action="Confirm Order" /> -->
    </template>
  </LayoutProductShopping>
</template>

<style>
.product__wrapper-list {
  margin: 3em 0 7em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.2em;
}

.wrap__empty {
  margin-top: 5em;
}

.group__flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.empty__illustration {
  width: 127px;
  height: 100px;
}
.empty__text h3 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: var(--fs-text-md);
  line-height: 24px;
}
.empty__text p {
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: var(--fs-text-xs);
  line-height: 18px;
  color: var(--neutral-gray);
}
.empty__link {
  width: 252px;
  height: 40px;
  margin: 1.5em auto 0;
  background: var(--primary-purple);
  border-radius: var(--radius-sm);
}
.empty__link h5 {
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--white);
}

@media screen and (min-width: 600px) {
  .product__wrapper-list {
    width: 500px;
    margin: 3rem auto;
  }
}

@media screen and (min-width: 1024px) {
  .product__wrapper-list {
    width: 100%;
    margin: 3em 0 12em;
    overflow-y: scroll;
  }

  .product__wrapper-list::-webkit-scrollbar {
    width: 0;
  }
}
@media screen and (min-width: 1440px) {
  .product__wrapper-list {
    height: 80vh;
  }
}
</style>
