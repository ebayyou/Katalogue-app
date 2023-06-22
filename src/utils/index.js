const isProductInCart = (products, idProducts) =>
  products.some((cart) => idProducts.includes(cart?.productId));

const changeProductIdToNumber = (id) => Number(id.split("id-")[1]);

export { isProductInCart, changeProductIdToNumber };
