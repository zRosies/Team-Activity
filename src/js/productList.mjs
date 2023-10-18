
import { getData } from "./productData.mjs";


export function productTemplate(data){
    // console.log(data)
    
    const product =  `<li class="product-card">
          
        <a href="/product_pages/index.html?product=${data.Id}">
            <img
            src="${data.Image}"
            alt="${data.Name}"
            />
            <h3 class="card__brand">${data.Brand.Name}</h3>
            <h2 class="card__name">${data.Name}</h2>
            <p class="product-card__price">${data.FinalPrice}</p>
          </a>
      </li>`
      return product;
  }

export default function productList(selector, category) {
    
    const productData = getData(category); //category is tents by default it's not needed


    productData.then((data)=>{
    // console.log(data)
    let section = document.querySelector(selector)
    data.forEach((product)=>{
        if(product.Id === "880RT" || product.Id === "989CG"){
            return;

        }
        
        
        // section.innerHTML += productTemplate(product)
        section.insertAdjacentHTML("beforeend", productTemplate(product))
        
    })});
    
}



