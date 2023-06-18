import { ref } from "vue";
import { defineStore } from "pinia";

const useCountProductStore = defineStore("countProduct", () => {
  // state
  const countProduct = ref(1);

  // action
  const nextProductCount = () => {
    if (countProduct.value === 20) countProduct.value = 0;
    countProduct.value++;
  };

  const previousProductCount = () => {
    if (countProduct.value === 1) countProduct.value = 21;
    countProduct.value--;
  };

  const updateCountByParamsId = (id) => {
    countProduct.value = id;
  };

  return {
    countProduct,
    nextProductCount,
    previousProductCount,
    updateCountByParamsId,
  };
});

export default useCountProductStore;
