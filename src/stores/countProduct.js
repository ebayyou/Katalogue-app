import { ref } from "vue";
import { defineStore } from "pinia";

const useCountProductStore = defineStore("product", () => {
  // state
  const countProduct = ref(1);

  // action
  const nextProductCount = () => {
    if (countProduct === 20) countProduct.value = 1;
    countProduct.value++;
  };
  const previousProductCount = () => {
    if (countProduct === 1) countProduct.value = 20;
    countProduct.value--;
  };

  return { countProduct, nextProductCount, previousProductCount };
});

export default useCountProductStore;
