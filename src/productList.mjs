//use this to get the klist of products from tents
import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./js/utils.mjs";



// Define the productList function
function productList(product) {

    //what are we returning, use template
   return `<li class="product-card">
    <a href="product_pages/index.html?product=">
    <img
      src=""
      alt="Image of "
    />
    <h3 class="card__brand"></h3>
    <h2 class="card__name"></h2>
    <p class="product-card__price">$</p></a>
  </li>`
   
  }
  
    // add another function to use template
function renderList(product) {

    const productContainer = document.getElementById('product-container');

    // Map the products to HTML strings using the template function
   const productHTML = product.map(product => productCardTemplate(product));

   // Use insertAdjacentHTML to insert the HTML strings into the DOM
  productHTML.forEach(html => {
    productContainer.insertAdjacentHTML('afterbegin', html);
  });
}
    // Export the renderList function as the named export
    export { renderList };

   // Export the productList function as the default export
    export default productList;