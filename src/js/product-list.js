import { loadHeaderAndFooter } from "./utils.mjs";
import productList from "./productList.mjs";
import { getParam } from "./utils.mjs";
import { getData } from "./productData.mjs";

loadHeaderAndFooter();

const categoryType = getParam("category");

const dataJson = getData(categoryType);

const title = document.querySelector("#title");

const newTitle = `${
  categoryType.charAt(0).toLocaleUpperCase() +
  categoryType.slice(1).toLowerCase()
}`;

title.innerHTML = newTitle;

productList(".product-list", dataJson);
