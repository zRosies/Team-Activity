import { getData } from "./productData.mjs";
// let products = document.createElement('ul')
export default async function productList(selector) {
  const details = await getData();
  details.forEach((detail) => {
    const html= renderDetails(detail)
    document.querySelector(selector).appendChild(html)
}}

function renderDetails(detail) {
    const newItem = `<li class="cart-card divider">
    <a href="product_pages/index.html?product=${detail.Id}" class="cart-card__image">
        <img
        src="${detail.Image}"
        alt="${detail.Name}"
        />
    </a>
    <a href="#">
        <h2 class="card__name">${detail.Name}</h2>
    </a>
    <p class="cart-card__color">${detail.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${detail.FinalPrice}</p>
    </li>`;
    return newItem
}