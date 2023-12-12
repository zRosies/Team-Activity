import { setLocalStorage, alertMessage, getParam } from "./utils.mjs";
import { loginRequest } from "./externalServices.mjs";
import { jwtDecode } from "jwt-decode";

export async function login(creds, redirect = "/") {
  console.log(creds);
  //   console.log(password);
  //   console.log(re   direct);
  console.log(redirect);

  try {
    const token = await loginRequest(creds);
    console.log(token);
    setLocalStorage("so_token", token);
    window.location = redirect;
  } catch (err) {
    alertMessage(err.message.message);
  }

  return;
}

export function checkLogin() {
  let token = localStorage.getItem("so_token");

  const validToken = isTokenValid(token);
  console.log(validToken);

  if (!validToken) {
    localStorage.removeItem("so_token");
    const location = window.location;
    console.log(location);
    window.location = `/login/index.html?redirect=${location.pathname}`;
  } else {
    return token;
  }
}

export function isTokenValid(token) {
  if (token == null) {
    return false;
  }
  const decoded = jwtDecode(token);
  let currentDate = new Date();
  const param = getParam(window.location);

  if (token) {
    if (decoded.exp * 1000 < currentDate.getTime()) {
      console.log("token expired");

      return false;
    } else {
      console.log("Valid token");
      return true;
    }
  }
}
