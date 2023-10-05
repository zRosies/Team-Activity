import productList from "./productList.mjs";
import { renderList } from "../productList.mjs";

import { getData } from "./productData.mjs";
const productdata = getData ();
productList(".product-list", "tents");