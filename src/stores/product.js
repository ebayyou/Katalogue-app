import { ref } from "vue";
import { defineStore } from "pinia";
import API from "../utils/Api";

const useProductStore = defineStore("product", () => {
  // state
  const product = ref(null);
  const isLoading = ref(true);
  const isAvailableProduct = ref(false);
  const availableProduct = ref(["men's clothing", "women's clothing"]);
  const backgroundProduct = ref("unvailable-product");

  // action
  const getProductByCount = async (count) => {
    isLoading.value = true;

    try {
      const singleProduct = await API.getSingleProduct(count);

      if (availableProduct.value.includes(singleProduct.category)) {
        product.value = singleProduct;
        isAvailableProduct.value = true;
      } else {
        isAvailableProduct.value = false;
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const setBackgroundProduct = (category) => {
    if (!isAvailableProduct.value) {
      backgroundProduct.value = "unvailable-product";
      return;
    }

    backgroundProduct.value = category;
  };

  return {
    product,
    backgroundProduct,
    isLoading,
    isAvailableProduct,
    getProductByCount,
    setBackgroundProduct,
  };
});

export default useProductStore;
