import checkoutProcess from "./checkoutProcess.mjs";
import { loadHeaderAndFooter } from "./utils.mjs";



loadHeaderAndFooter();

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



