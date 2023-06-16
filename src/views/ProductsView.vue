<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
// import WrapperButton from "../components/common/button/WrapperButton.vue";
// import ButtonAction from "../components/common/button/ButtonAction.vue";
// import ButtonPagnation from "../components/common/button/ButtonPagnation.vue";
// import BreadCrumbs from "../components/common/BreadCrumbs.vue";
// import ProductRating from "../components/common/product/ProductRating.vue";
// import ProductReview from "../components/common/product/ProductReview.vue";
// import LayoutProduct from "../components/layout/LayoutProduct.vue";
import SkeletonUI from "../components/common/SkeletonUI.vue";

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
  <SkeletonUI />

  <!-- <LayoutProduct>
    <template #left-product>
      <div class="left-product">
        <img
          class="product__img"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
        />
      </div>
    </template>
    <template #right-product>
      <div class="right-product">
        <div class="product__breadcrumbs">
          <BreadCrumbs :breadcrumbs="breadcrumbs" />
        </div>

        <div>
          <h1 class="product__heading">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <div class="product__group group__gap">
            <ProductRating />
            <ProductReview />
          </div>
          <div class="product__category">
            <h3>men's clothing</h3>
          </div>
          <p class="product__desc">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <p class="product__price-mobile">$123</p>
        </div>

        <WrapperButton :opsi="2">
          <template #button-opsi-1>
            <ButtonAction iconName="ShoppingCart" action="Add to Cart" />
          </template>
          <template #button-opsi-2>
            <div class="product__price-desktop">
              <p>$123.5</p>
            </div>

            <div class="product__group group__gap product__group-mobile">
              <ButtonPagnation iconName="ArrowLeft2" />
              <ButtonPagnation iconName="ArrowRight2" />
            </div>
          </template>
        </WrapperButton>
      </div>
    </template>
  </LayoutProduct> -->

  <RouterView />
</template>

<style>
.left-product {
  width: 240px;
  height: 350px;
  margin: 0 auto;
}

.product__group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}

.product__group.group__gap {
  gap: 1.2em;
}

.product__text {
  font-style: normal;
  font-size: var(--fs-text-md);
  font-weight: var(--font-regular);
}

.product__heading {
  font-style: normal;
  font-size: var(--fs-heading);
  font-weight: var(--font-semi-bold);
  line-height: 30px;
  margin-bottom: 0.5em;
}

.product__category {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 45px;
  margin: 1.6em 0 0.65em;
  background: var(--gradient-men);
  border-radius: var(--radius-sm);
}

.product__category h3 {
  font-style: normal;
  font-size: var(--fs-text-lg);
  font-style: italic;
  font-weight: var(--font-medium);
}

.product__desc {
  font-style: normal;
  font-size: var(--fs-text-sm);
  font-weight: var(--font-regular);
  line-height: 21px;
  margin-bottom: 0.65em;
}

.product__price-mobile {
  font-style: normal;
  font-size: var(--fs-text-lg);
  font-weight: var(--font-semi-bold);
  line-height: 21px;
}
.product__price-desktop,
.product__breadcrumbs {
  display: none;
}

.icon-product {
  width: 20px;
  height: 20px;
}

@media screen and (min-width: 1024px) {
  .left-product {
    width: 320px;
    height: 457px;
  }

  .icon-product {
    width: 24px;
    height: 24px;
  }

  .product__category {
    display: block;
    background: transparent;
  }

  .product__category h3 {
    color: var(--primary-purple);
  }

  .product__price-mobile,
  .product__group.product__group-mobile {
    display: none;
  }

  .product__breadcrumbs {
    display: block;
    margin-bottom: 1em;
  }

  .product__price-desktop {
    display: block;
    width: 185px;
    height: 44px;
    border: 2px solid var(--primary-purple);
    border-radius: var(--radius-circle);
  }

  .product__price-desktop p {
    font-style: normal;
    font-weight: var(--font-semi-bold);
    font-size: var(--fs-text-lg);
    text-align: center;
    line-height: 44px;
    color: var(--primary-purple);
  }

  .product__desc {
    width: 80%;
    font-size: var(--fs-text-lg);
    line-height: 30px;
  }
}

@media screen and (min-width: 1440px) {
  .product__img {
    max-width: 100%;
  }

  .left-product {
    width: 35%;
    height: 100%;
  }

  .right-product {
    position: relative;
    width: 65%;
    height: 457px;
  }

  .product__desc {
    width: 70%;
    margin-bottom: 0;
  }
}
</style>
