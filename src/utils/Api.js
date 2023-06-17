const API = (() => {
  const API_URL = "https://fakestoreapi.com";

  const getSingleProduct = async (productCount) => {
    const request = await fetch(`${API_URL}/products/${productCount}`);
    const response = await request.json();

    return response;
  };

  const getUserCarts = async (userId) => {
    const request = await fetch(`${API_URL}/carts/user/${userId}`);
    const response = await request.json();

    return response;
  };

  const addCartProduct = async ({ productId, quantity }) => {
    const request = await fetch(`${API_URL}/carts`, {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: "2020-02-03",
        products: [{ productId, quantity }],
      }),
    });

    const response = await request.json();
    return response;
  };

  const updateCartProduct = async ({ productId, quantity }) => {
    const request = await fetch(`${API_URL}/carts/${productId}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: 5,
        date: "2020-02-03",
        products: [{ productId, quantity }],
      }),
    });

    const response = await request.json();
    return response;
  };

  const deleteCartProduct = async (productId) => {
    const request = await fetch(`${API_URL}/carts/${productId}`, {
      method: "DELETE",
    });

    const response = await request.json();
    return response;
  };

  return {
    getSingleProduct,
    getUserCarts,
    addCartProduct,
    updateCartProduct,
    deleteCartProduct,
  };
})();

export default API;
