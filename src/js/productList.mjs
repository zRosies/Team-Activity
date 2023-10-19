
import { getData } from "./productData.mjs";


export function productTemplate(data){
    // console.log(data)

    // --------------------------------for later---------------------------
    // <a href="/product_pages/index.html?${data.Brand.ProductsUrl}"></a>
    const product =  `<li class="product-card">
    
        <a href="/product_pages/index.html?category=${data.Category}&&product=${data.Id}">
            <img
            src="${data.Images.PrimaryMedium}"
            alt="${data.Name}"
            />
            <h3 class="card__brand">${data.Brand.Name}</h3>
            <h2 class="card__name">${data.Name}</h2>
            <p class="product-card__price">${data.FinalPrice}</p>
          </a>
      </li>`
      return product;
  }

export default function productList(selector, productData, place = "beforeend") {
    
    // const productData = getData(category); //category is tents by default it's not needed

    const handleduplicated = []
    productData.then((data)=>{
        
    // console.log(data)
    let section = document.querySelector(selector)
    data.forEach((product)=>{
        console.log(data)

       
       
        
        
        // section.innerHTML += productTemplate(product)
        section.insertAdjacentHTML(place, productTemplate(product))
        
    })});
    
}



