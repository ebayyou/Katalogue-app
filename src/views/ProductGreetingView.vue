<script setup>
import ButtonLinkTo from '../components/common/button/ButtonLinkTo.vue';
import LayoutProductShopping from '../components/layout/LayoutProductShopping.vue';
</script>

<template>
  <LayoutProductShopping type="modal" withLogo :opsiButton="1">
    <template #product-shopping-content>
      <div class="greeting-wrap">
        <div class="greeting">
          <h1 class="heading__text-gradient">Thanks For Order!!!</h1>
          <p>please give feedback on our service. and don't forget to keep smiling (;</p>
        </div>
      </div>
    </template>

    <template #button-group>
      <ButtonLinkTo to="/" iconName="Notepad2" action="Back to Product" />
    </template>
  </LayoutProductShopping>
</template>

<style scoped>
.greeting-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.greeting {
  width: 90%;
  margin: 0 auto;
}

.greeting h1 {
  margin-bottom: 0.3em;
  font-size: 24px;
  text-align: center;
}

.greeting p {
  font-style: normal;
  font-weight: var(--font-reguler);
  font-size: 18px;
  line-height: 30px;
  text-align: center;
}

@media screen and (min-width: 600px) {
  .greeting {
    width: 375px;
  }
}
@media screen and (min-width: 1024px) {
  .greeting-wrap {
    height: 35vh;
  }
}
</style>
