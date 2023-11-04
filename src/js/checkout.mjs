import checkoutProcess from "./checkoutProcess.mjs";
import { loadHeaderAndFooter } from "./utils.mjs";



loadHeaderAndFooter();

// const errorDiv = document.createElement(".errors");

checkoutProcess.init("so-cart" ,".ordersum");

const zip = document.querySelector("#zip");
zip.addEventListener("blur", ()=>{checkoutProcess.calculateTotal(), checkoutProcess.displayTotal()})


const form = document.forms["checkout"]

form.addEventListener("submit", (e)=>{
    // console.log(e.target);
    e.preventDefault()
    checkoutProcess.init("so-cart" ,".ordersum");
    checkoutProcess.calculateTotal()
    
    checkoutProcess.checkout(e.target);
})



// // this is how it would look if we listen for the submit on the form
// document.forms["checkout"].addEventListener("submit", (e) => {
//   e.preventDefault();
//   // e.target would contain our form in this case
//   checkoutProcess.checkout(e.target);
// });


