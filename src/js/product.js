import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { loadHeaderAndFooter } from "./utils.mjs";
// const productId = getParam('product');
// console.log(findProductById(productId));
// console.log(productId)

function addProductToCart(product) {
  let currentCart = getLocalStorage("so-cart") || [];

  currentCart.push(product);

  setLocalStorage("so-cart", currentCart);
}
// add to cart button event handler
export async function addToCartHandler(e) {
  // console.log(e);
  const product = await findProductById(e.target.dataset.id);
  
  addProductToCart(product);
}
