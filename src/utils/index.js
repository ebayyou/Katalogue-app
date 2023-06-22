const isProductInCart = (products, idProducts) =>
  products.some((cart) => idProducts.includes(cart?.productId));

const changeProductIdToNumber = (id) => Number(id.split("id-")[1]);

const getFormattedDate = () => {
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const getRandomNumber = () => {
  const min = 100000;
  const max = 999999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
  isProductInCart,
  changeProductIdToNumber,
  getFormattedDate,
  getRandomNumber,
};
