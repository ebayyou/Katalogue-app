import { ref } from "vue";
import { defineStore } from "pinia";
import API from "../utils/Api";
import { changeProductIdToNumber, isProductInCart } from "../utils";

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
      console.error("Error get product:", error);
      alert("There was an error get the product, Please refresh and try again");
    } finally {
      isLoading.value = false;
    }
  };

  const getCartProducts = async () => {
    try {
      const products = await API.getAllProduct();
      const getIdProducts = cartProducts.value.map(
        (product) => `id-${product.id}`
      );

      const transformCarts = quantityProducts.value
        .map((item) => {
          // check if a product ID exists in the cart and return the function
          if (isProductInCart(quantityProducts.value, getIdProducts)) {
            return null;
          }

          const { id, title, image, price } = products.find(
            (product) => product.id === item.productId
          );

          return {
            productId: `id-${id}`,
            title,
            image,
            price,
            quantity: item.quantity,
            isProductCart: true,
          };
        })
        .filter(Boolean);

      cartProducts.value.splice(
        0,
        cartProducts.value.length,
        ...transformCarts
      );
    } catch (error) {
      console.error("Error get product in cart:", error);
      alert(
        "There was an error get the product to the cart. Please try again later (;"
      );
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const response = await API.addCartProduct({ productId, quantity });
      const getIdProducts = response.products.map(
        (product) => product.productId
      );

      if (isProductInCart(quantityProducts.value, getIdProducts)) {
        throw new Error("Product is already in the cart");
      }

      quantityProducts.value.push(...response.products);
      alert("Successfully added product to cart.");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert(`Failed to add product to cart, ${error.message}`);
    }
  };

  const updateProductCart = async (id, quantity) => {
    try {
      const productId = changeProductIdToNumber(id);
      const response = await API.updateCartProduct({ productId, quantity });
      
      const updateProductQuantity = quantityProducts.value.map((item) => {
        if (item.productId === productId) {
          return {
            productId: id,
            ...response.products[0],
          };
        }

        return item;
      });


      quantityProducts.value = updateProductQuantity;
    } catch (error) {
      console.error("Error update product in cart:", error);
    }
  };

  const deleteProductCart = async (productId) => {
    try {
      await API.deleteCartProduct();
      const id = changeProductIdToNumber(productId);

      const deleteQuantityProduct = quantityProducts.value.filter(
        (item) => item.productId !== id
      );

      quantityProducts.value.splice(
        0,
        quantityProducts.value.length,
        ...deleteQuantityProduct
      );

      // update the product cart
      getCartProducts();
    } catch (error) {
      console.error("Error delete product in cart:", error);
    }
  };

  const setBackgroundProduct = (category) => {
    backgroundProduct.value = category;
  };

  return {
    product,
    cartProducts,
    quantityProducts,
    backgroundProduct,
    isLoading,
    isAvailableProduct,
    getProductByCount,
    getCartProducts,
    addToCart,
    updateProductCart,
    deleteProductCart,
    setBackgroundProduct,
  };
});

export default useProductStore;
