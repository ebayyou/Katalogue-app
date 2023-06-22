const API = (() => {
  const API_URL = "https://fakestoreapi.com";

  const getSingleProduct = async (productCount) => {
    const request = await fetch(`${API_URL}/products/${productCount}`);
    const response = await request.json();

    return response;
  };

  const getAllProduct = async () => {
    const request = await fetch(`${API_URL}/products`);
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        date: new Date().toISOString(),
        products: [{ productId, quantity }],
      }),
    });

    const response = await request.json();
    return response;
  };

  const updateCartProduct = async ({ productId, quantity }) => {
    const request = await fetch(`${API_URL}/carts/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        date: new Date().toISOString(),
        products: [{ productId, quantity }],
      }),
    });

    const response = await request.json();
    return response;
  };

  const deleteCartProduct = async () => {
    const request = await fetch(`${API_URL}/carts/7`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await request.json();
    return response;
  };

  return {
    getSingleProduct,
    getAllProduct,
    getUserCarts,
    addCartProduct,
    updateCartProduct,
    deleteCartProduct,
  };
})();

export default API;
