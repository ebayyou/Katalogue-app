<script setup>
import { ref, onBeforeMount } from "vue";
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import useProductStore from "../stores/product";
import { getFormattedDate, getRandomNumber } from "../utils";
import ButtonLinkTo from "../components/common/button/ButtonLinkTo.vue";
import ButtonAction from "../components/common/button/ButtonAction.vue";
import BillItem from "../components/common/product/BillItem.vue";
import ProductConfirmItem from "../components/common/product/ProductConfirmItem.vue";
import ProductConfirmListItem from "../components/common/product/ProductConfirmListItem.vue";
import ProductNothingInCart from "../components/common/product/ProductNothingInCart.vue";
import LayoutProductShopping from "../components/layout/LayoutProductShopping.vue";
import { useRouter } from "vue-router";

const currentDate = ref("");
const idOrder = ref(0);
const taxes = ref(10);
const items = ref(1200);
const shipping = ref(35);
const total = ref(1245);

const productStore = useProductStore();
const router = useRouter();

const { cartProducts } = storeToRefs(productStore);

onBeforeMount(() => {
  currentDate.value = getFormattedDate();
  idOrder.value = getRandomNumber();
});

const nothingProductInCart = computed(() => cartProducts.value?.length === 0);

const confirmOrder = () => router.push("/products/greetings");
</script>

<template>
  <LayoutProductShopping
    path="/products/cart-product"
    :opsiButton="2"
    headingBarName="Order Summary"
  >
    <template #product-shopping-content>
      <ProductNothingInCart v-if="nothingProductInCart" />

      <div v-else class="product__wrapper-list p-wrap">
        <div class="confirm__group">
          <h3>#{{ idOrder }}</h3>

          <div class="confirm__status">
            <div class="confirm__status-item">
              <h4>Order Date</h4>
              <p>{{ currentDate }}</p>
            </div>
            <div class="confirm__status-item">
              <h4>Payment</h4>
              <p>Visa-2788</p>
            </div>
            <div class="confirm__status-item">
              <h4>Status</h4>
              <p class="label">Processing</p>
            </div>
          </div>
        </div>

        <ProductConfirmListItem name="Items">
          <template #list-item>
            <ProductConfirmItem :products="cartProducts" />
          </template>
        </ProductConfirmListItem>

        <ProductConfirmListItem name="Bills">
          <template #list-item>
            <BillItem name="Taxes" :price="taxes" />
            <BillItem name="Items" :price="items" />
            <BillItem name="Shipping" :price="shipping" />
          </template>
        </ProductConfirmListItem>

        <BillItem type="bold" name="Total" :price="total" />
      </div>
    </template>

    <template #button-group>
      <ButtonLinkTo to="/" action="Cancel" />
      <ButtonAction
        :handlerEvent="confirmOrder"
        :disabled="nothingProductInCart"
        iconName="ReceiptItem"
        action="Confirm Order"
      />
    </template>
  </LayoutProductShopping>
</template>

<style>
.p-wrap {
  padding: 1em;
}
.product__confirm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8em;
  margin: 3em 0 7rem;
}

.confirm__group {
  width: 80%;
}

.confirm__group h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}

.confirm__status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.confirm__status-item h4 {
  margin-bottom: 0.2em;
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--neutral-gray);
}

.confirm__status-item p {
  font-style: normal;
  font-weight: var(--font-normal);
  font-size: var(--fs-text-md);
  line-height: 24px;
  color: var(--neutral-black);
}

.confirm__status .label {
  width: 76px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: var(--fs-text-xs);
  font-weight: var(--font-reguler);
  color: var(--white);
  background-color: var(--primary-purple);
  border-radius: var(--radius-sm);
}

@media screen and (min-width: 600px) {
  .product__confirm {
    width: 500px;
    margin: 3rem auto;
  }
}

@media screen and (min-width: 1024px) {
  .product__confirm {
    width: 100%;
  }

  .confirm__status .label {
    width: 85px;
  }
}
</style>
