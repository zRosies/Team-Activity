import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";
let details = "";
export default async function productDetails(productId) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  // once we have the product details we can render out the HTML
  // add a listener to Add to Cart button
  details = await findProductById(productId);
  renderProductDetails(details);
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  setLocalStorage("so-cart", details);
}
function renderProductDetails(product) {
  document.getElementById("productName").innerText = product.Name;
  document.getElementById("productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.getElementById("productImage").src = product.Image;
  document.getElementById("productFinalPrice").innerText = product.FinalPrice;
  document.getElementById("productColorName").innerText =
    product.Colors[0].ColorName;
  // document.getElementById("productFinalPrice").innerText =
  //   product.Colors.ColorName;
  document.getElementById("productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
}
