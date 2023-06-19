import { ref } from "vue";
import { defineStore } from "pinia";
import API from "../utils/Api";

const useProductStore = defineStore("product", () => {
  // state
  const product = ref(null);
  const cartProducts = ref([]);
  const quantityProducts = ref([]);
  const isLoading = ref(true);
  const isAvailableProduct = ref(false);
  const availableProduct = ref(["men's clothing", "women's clothing"]);
  const backgroundProduct = ref("");

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
      alert(`there is an error: ${error}`);
    } finally {
      isLoading.value = false;
    }
  };

  const getCartProducts = async () => {
    const products = await API.getAllProduct();

    const transformCarts = quantityProducts.value.map((cart) => {
      const { id, title, image, price } = products.filter(
        (product) => product.id === cart.productId
      )[0];

      return {
        id: `id-${id}`,
        title,
        image,
        price,
      };
    });

    cartProducts.value.push(...transformCarts);
  };

  const addToCart = async (productId, quantity) => {
    try {
      const response = await API.addCartProduct({ productId, quantity });

      quantityProducts.value.push(...response.products);
      alert("Success added product to cart");
    } catch (error) {
      alert(`there is an error: ${error}`);
    }
  };

  const setBackgroundProduct = (category) => {
    backgroundProduct.value = category;
  };

  return {
    product,
    cartProducts,
    backgroundProduct,
    isLoading,
    isAvailableProduct,
    getProductByCount,
    getCartProducts,
    addToCart,
    setBackgroundProduct,
  };
});

export default useProductStore;
