import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { postForm } from "./externalServices.mjs";
import {alertMessage} from "./utils.mjs"

function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};
    convertedJSON.orderDate = new Date().toISOString();
  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function necessaryItemsFromTheList(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

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
    subtotal.innerText = "$" + this.itemTotal.toFixed(2);
  },
  
  calculateTotal: function () {
    //-------- calculateing the shipping---
    this.shipping = 10 + ((this.list.length - 1) * 2);
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (parseFloat(this.itemTotal) +  parseFloat(this.shipping) +  parseFloat(this.tax)).toFixed(2);
    this.displayTotal();
  },

  displayTotal: function () {
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
  checkout: async function(form){
  

    
    const json = formDataToJSON(form);
    // the function because the list is an object with a lot of information so it is just getting
    json.items = necessaryItemsFromTheList(this.list);
    
    json.orderTotal = parseFloat(this.orderTotal);
    json.shipping = this.shipping;
    json.tax = parseFloat(this.tax);
    // console.log(json);
    try {
      const res = await postForm(json);
      console.log(res);
      // console.log(res);      
      setLocalStorage("so-cart", []);
      const order = res.orderId;


      const expirationDate = new Date()
      expirationDate.setDate(expirationDate.getTime() + 5 * 60 * 1000);

      document.cookie = `order=${order}; expires=${expirationDate.toUTCString()}`;
      window.location.href = "sucess.html";

      
    } catch (err) {

      for(const key in err.message){
        const value = err.message[key];
        // console.log(`${key}: ${value}`);

        alertMessage(value);
    }




  }}

};

export default checkoutProcess;