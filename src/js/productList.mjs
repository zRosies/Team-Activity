import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";
// let products = document.createElement('ul')
function productCardTemplate(product) {
  const template = `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
      <img src="${product.Image}"
        alt="Marmot Ajax tent" />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.Name}</h2>
      <p class="product-card__price">${product.ListPrice}</p>
    </a>
  </li>`;
  return template;
}
export default async function productList(selector) {
  const details = await getData();
  renderListWithTemplate(productCardTemplate, selector, details);
}
