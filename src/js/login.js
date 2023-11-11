import { loadHeaderAndFooter } from "./utils.mjs";
import { getParam } from "./utils.mjs";
import { login } from "./auth.mjs";

loadHeaderAndFooter();
const param = getParam("redirect");
console.log(param);
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const useremail = form.elements.email.value;
  const userpassword = form.elements.password.value;

  const credentials = { email: useremail, password: userpassword };

  login(credentials, param);
});
