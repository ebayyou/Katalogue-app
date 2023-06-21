<script setup>
import { useRouter } from "vue-router";
import useCountProductStore from "../../stores/countProduct";
import useProductStore from "../../stores/product";
import ButtonAction from "./button/ButtonAction.vue";
import WrapperButton from "./button/WrapperButton.vue";
import NavigationBar from "./NavigationBar.vue";

defineProps({
  errorCode: Number,
  errorMsg: String,
});

const productStore = useProductStore();
const countProductStore = useCountProductStore();
const router = useRouter();

const goToNextProduct = () => {
  countProductStore.nextProductCount();
  productStore.getProductByCount(countProductStore.countProduct);

  router.push(`/products/${countProductStore.countProduct}`);
};

const refreshProduct = () => {
  countProductStore.clearCountProduct();
  router.push({ name: "products" });
  productStore.getProductByCount(countProductStore.countProduct);
};
</script>

<template>
  <div class="error__wrapper error__flex">
    <div class="error__background error__flex">
      <div class="error__group">
        <div class="error__navbar">
          <NavigationBar />
        </div>

        <div class="error__info">
          <h1>{{ errorCode }}</h1>
          <p>{{ errorMsg }}</p>
        </div>

        <WrapperButton :opsi="2" noBackground="noBackground">
          <template #button-opsi-1>
            <ButtonAction
              to="/"
              iconName="Shop"
              action="Next product"
              :handlerEvent="goToNextProduct"
            />
          </template>
          <template #button-opsi-2>
            <ButtonAction action="Refresh" :handlerEvent="refreshProduct" />
          </template>
        </WrapperButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--white);
}

.error__flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.error__navbar {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
}

.error__background {
  width: 100%;
  height: 574px;
  background: url("../../assets/Image/sad.svg") center;
}

.error__group {
  text-align: center;
  width: 80%;
}

.error__info {
  width: 100%;
}
.error__info h1 {
  font-style: normal;
  font-weight: var(--font-semi-bold);
  font-size: 80px;
  line-height: 120px;
}
.error__info p {
  font-style: normal;
  font-weight: var(--font-regular);
  font-size: 20px;
  line-height: 24px;
}

@media screen and (min-width: 600px) {
  .error__group {
    width: 319px;
  }
}

@media screen and (min-width: 1024px) {
  .error__group {
    width: 350px;
    height: 574px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error__info {
    width: 60%;
  }
}

@media screen and (min-width: 1250px) {
  .error__wrapper {
    position: unset;
  }

  .error__group {
    width: 60%;
  }

  .error__navbar {
    position: unset;
    display: none;
  }
}

@media screen and (min-width: 1440px) {
  .error__wrapper {
    width: 80%;
  }

  .error__group {
    position: relative;
    width: 60%;
    height: 60%;
  }
}
</style>
