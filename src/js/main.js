import productList, { productTemplate} from "./productList.mjs";
import  {loadHeaderAndFooter} from "./utils.mjs"

productList("#product-list", "tents");

loadHeaderAndFooter();
// loadFromPath("../public/partials/header").then((data)=>console.log(data))



  