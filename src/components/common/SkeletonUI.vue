<script setup>
import LayoutProduct from "../layout/LayoutProduct.vue";
import WrapperButton from "./button/WrapperButton.vue";
</script>

<template>
  <LayoutProduct type="skeleton">
    <template #left-product>
      <div class="left-product">
        <div class="skeleton__image skeleton__style" />
      </div>
    </template>
    <template #right-product>
      <div class="right-product">
        <div class="skeleton__breadcrubms skeleton__style" />

        <div class="skeleton__group gap-md">
          <div class="skeleton__heading skeleton__style" />

          <div class="skeleton__group-between w-100 gap-md">
            <div class="skeleton__star skeleton__style" />
            <div class="skeleton__review skeleton__style" />
          </div>
        </div>

        <div class="skeleton__group gap-sm">
          <div class="skeleton__catalog skeleton__style" />
          <div class="skeleton__desc desc_1 skeleton__style" />
          <div class="skeleton__desc desc_2 skeleton__style" />
          <div class="skeleton__desc desc_3 skeleton__style" />
          <div class="skeleton__price-mobile skeleton__style" />
        </div>

        <WrapperButton :opsi="2">
          <template #button-opsi-1>
            <div class="skeleton__button skeleton__style" />
          </template>
          <template #button-opsi-2>
            <div class="skeleton__price-desktop" />

            <div class="skeleton__group-between group__md-none gap-sm">
              <div class="skeleton__pagnation pg-left skeleton__style" />
              <div class="skeleton__pagnation pg-right skeleton__style" />
            </div>
          </template>
        </WrapperButton>
      </div>
    </template>
  </LayoutProduct>
</template>

<style scoped>
.left-product {
  width: 100%;
  height: 360px;
}
.right-product {
  width: 100%;
}

.skeleton__style {
  border-radius: var(--radius-sm);
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton__image {
  width: 258px;
  height: 360px;
  margin: 0 auto;
}

.skeleton__group {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1.6em;
}
.skeleton__group-between {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.skeleton__heading {
  width: 100%;
  height: 60px;
}
.skeleton__review {
  width: 35%;
  height: 26px;
}
.skeleton__star {
  width: 30%;
  height: 26px;
}

.skeleton__catalog {
  width: 150px;
  height: 45px;
}

.skeleton__desc {
  height: 15px;
}
.skeleton__desc.desc_1 {
  width: 100%;
  height: 15px;
}
.skeleton__desc.desc_2 {
  width: 75%;
}
.skeleton__desc.desc_3 {
  width: 50%;
}

.skeleton__price-mobile {
  width: 82px;
  height: 30px;
}

.skeleton__button {
  width: 185px;
  height: 45px;
  border-radius: var(--radius-circle);
}

.skeleton__pagnation {
  width: 50px;
  height: 50px;
  background: #d5e3e5;
}
.pg-left {
  border-radius: 5px 0px 0px 5px;
}
.pg-right {
  border-radius: 0px 5px 5px 0px;
}

.skeleton__price-desktop,
.skeleton__breadcrubms {
  display: none;
}

.gap-sm {
  gap: 0.95em;
}
.gap-md {
  gap: 1.25em;
}
.w-100 {
  width: 100%;
}

@media (min-width: 1024px) {
  .left-product {
    width: 350px;
    height: 500px;
  }

  .skeleton__image {
    width: 100%;
    height: 100%;
  }

  .skeleton__price-mobile,
  .group__md-none {
    display: none;
  }

  .skeleton__price-desktop {
    display: block;
    width: 185px;
    height: 44px;
    border: 2px solid #d5e3e5;
    border-radius: var(--radius-circle);
  }

  .skeleton__breadcrubms {
    display: block;
    width: 260px;
    height: 21px;
    margin-bottom: 0.8em;
  }

  .skeleton__heading {
    height: 75px;
  }

  .skeleton__star {
    width: 178px;
  }
  .skeleton__review {
    width: 129px;
  }

  .skeleton__catalog {
    width: 147px;
    height: 30px;
  }

  .skeleton__desc.desc_1 {
    width: 434px;
    height: 60px;
  }
  .skeleton__desc.desc_2 {
    width: 373px;
    height: 30px;
  }
  .skeleton__desc.desc_3 {
    width: 93px;
    height: 30px;
  }
}

@media (min-width: 1440px) {
  .left-product {
    width: 35%;
    height: 450px;
  }

  .right-product {
    position: relative;
    width: 65%;
    height: 457px;
  }
}
</style>
