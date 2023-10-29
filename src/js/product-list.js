import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();
const categoryId = getParam("category");
// console.log(categoryId);
productList(".product-list", categoryId);
