import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  // console.log('asjasiiasj');

  let currentCart = getLocalStorage("so-cart") || [];

  currentCart.push(product);

  setLocalStorage("so-cart", currentCart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

const addCartButton = document.querySelector("#addToCart");
// add listener to Add to Cart button
addCartButton.addEventListener("click", addToCartHandler);
