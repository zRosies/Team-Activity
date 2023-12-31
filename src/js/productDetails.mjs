import { addToCartHandler } from "./product";
import { getParam, loadHeaderAndFooter} from "./utils.mjs";
import { findProductById} from "./externalServices.mjs";
import productList from "./productList.mjs";

// add listener to Add to Cart button




export function renderDetails() {

    //------------------Do it after-------------------
  // const productID = getParam("Brand")

  const producId = getParam("product");
  console.log(producId)
  // console.log(producId)
  const object = findProductById(`${producId}`);
  console.log(object)
 
  
  object.then((info) => {
    console.log(info);
    

 
    const renderedDetail = detailsTemplate(info);
    // console.log(renderedDetail)
    
    const section = document.querySelector("#section");
    section.innerHTML += renderedDetail;
    const addCartButton = document.querySelector("#addToCart");
    addCartButton.addEventListener("click", addToCartHandler);
  });
}

function detailsTemplate(detail) {
  // console.log(detail)
  
  const newDetail = 
          `<section class="product-detail">
            <h3 id="productName">${detail.Brand.Name}</h3>
            <h2 class="divider" id="productNameWithoutBrand">${detail.NameWithoutBrand}</h2>
            <img id="img" class="divider" src="${detail.Images.PrimaryLarge}" alt="${detail.Name}" />
            <p class="product-card__price" id="productFinalPrice">$${detail.ListPrice}</p>
            <p class="product__color" id="productColorName">${detail.Colors[0].ColorName}</p>
            <p class="product__description" id="productDescriptionHtmlSimple">${detail.DescriptionHtmlSimple}</p>

            <div class="product-detail__add">
              <button id="addToCart" data-id="${detail.Id}">Add to Cart</button>
            </div>
          </section>`;

  return newDetail;
}


loadHeaderAndFooter();
renderDetails();

// productList('#section',)



