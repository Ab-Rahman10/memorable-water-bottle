const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const saveCartTOLs = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLs = (id) => {
  const cart = getStoredCart();
  if (!cart.includes(id)) {
    cart.push(id);
  }
  // save cart to local storage
  saveCartTOLs(cart);
};

export { addToLs, getStoredCart };
