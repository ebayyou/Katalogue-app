<script setup>
import ButtonLinkTo from '../components/common/button/ButtonLinkTo.vue';
import BillItem from '../components/common/product/BillItem.vue';
import ProductConfirmItem from '../components/common/product/ProductConfirmItem.vue';
import ProductConfirmListItem from '../components/common/product/ProductConfirmListItem.vue';
import LayoutProductShopping from '../components/layout/LayoutProductShopping.vue';
</script>

<template>
  <LayoutProductShopping path="/cart-product" :opsiButton="2" headingBarName="Order Summary">
    <template #product-shopping-content>
      <div class="product__confirm">
        <div class="confirm__group">
          <h3>#441122</h3>

          <div class="confirm__status">
            <div class="confirm__status-item">
              <h4>Order Date</h4>
              <p>18 June, 2023</p>
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
            <ProductConfirmItem />
            <ProductConfirmItem />
          </template>
        </ProductConfirmListItem>

        <ProductConfirmListItem name="Bills">
          <template #list-item>
            <BillItem name="Taxes" price="10" />
            <BillItem name="Items" price="1200" />
            <BillItem name="Shipping" price="35" />
          </template>
        </ProductConfirmListItem>

        <BillItem type="bold" name="Total" price="1245" />
      </div>
    </template>

    <template #button-group>
      <ButtonLinkTo to="/" action="Cancel" />
      <ButtonLinkTo to="/greetings" iconName="ReceiptItem" action="Confirm Order" />
      <!-- <ButtonAction iconName="ReceiptItem" action="Confirm Order" /> -->
    </template>
  </LayoutProductShopping>
</template>

<style>
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
