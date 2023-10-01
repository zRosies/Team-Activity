import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";
let product = {};

export default async function productDetails(productId) {
  //get detail from product use await to process promise
  product = await findProductById(productId);

  //have the product detail and render out the HTML
  renderProductDetails();

  // when the HTML is rendered we can add a listener to add to cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  setLocalStorage("so-cart", product);
}
function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}
