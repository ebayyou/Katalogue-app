import { ref } from "vue";
import { defineStore } from "pinia";
import API from "../utils/Api";

const useProductStore = defineStore("product", () => {
  // state
  const product = ref(null);
  const loading = ref(true);

  // action
  const getProductByCount = async (count) => {
    loading.value = true;

    try {
      const singgleProduct = await API.getSingleProduct(count);
      product.value = singgleProduct;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  return { product, loading, getProductByCount };
});

export default useProductStore;
