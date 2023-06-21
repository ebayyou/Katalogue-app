const isProductInCart = (products, idProducts) =>
  products.some((cart) => idProducts.includes(cart?.productId));

export { isProductInCart };
