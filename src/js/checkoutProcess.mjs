import { getLocalStorage } from "./utils.mjs";
import { checkout } from "./productData.mjs";

// function formDataToJSON(formElement) {
//   const formData = new FormData(formElement),
//     convertedJSON = {};

//   formData.forEach(function (value, key) {
//     convertedJSON[key] = value;
//   });

//   return convertedJSON;
// }

// function packageItems(items) {
//   const simplifiedItems = items.map((item) => {
//     console.log(item);
//     return {
//       id: item.Id,
//       price: item.FinalPrice,
//       name: item.Name,
//       quantity: 1,
//     };
//   });
//   return simplifiedItems;
// }

const checkoutProcess = {
  key: "",
  outputSelector: "",
  list: [],
  itemTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
  init: function (key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = getLocalStorage(key);
    this.calculateItemSummary();
  },

  
  calculateItemSummary: function () {
    const subtotal = document.querySelector(
      this.outputSelector + " #subtotal"
    );
    const quantity = document.querySelector(
      this.outputSelector + " #qtn"
    );
    quantity.innerText = `(${this.list.length})`;
       
    const amounts = this.list.map((item) => item.FinalPrice);

    this.itemTotal = amounts.reduce((sum, item) => sum + item);
    subtotal.innerText = "$" + this.itemTotal;
  },
  
  calculateTotal: function () {
    //-------- calculateing the shipping---
    this.shipping = 10 + ((this.list.length - 1) * 2);
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);
    this.displayTotal();
  },
  displayTotal: function () {
    console.log(this.orderTotal);
    const shipping = document.querySelector(this.outputSelector + " #shipping");
    const tax = document.querySelector(this.outputSelector + " #tax");
    const orderTotal = document.querySelector(
      this.outputSelector + " #total"
    );
    console.log(this.shipping);
    shipping.innerText = "$" + this.shipping;
    tax.innerText = "$" + this.tax;
    orderTotal.innerText = "$" + this.orderTotal;
  },


  // checkout: async function (form) {
  //   const json = formDataToJSON(form);
  //   // add totals, and item details
  //   json.orderDate = new Date();
  //   json.orderTotal = this.orderTotal;
  //   json.tax = this.tax;
  //   json.shipping = this.shipping;
  //   json.items = packageItems(this.list);
  //   console.log(json);
  //   try {
  //     const res = await checkout(json);
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};

export default checkoutProcess;