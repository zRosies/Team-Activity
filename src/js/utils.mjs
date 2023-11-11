import productList, { productTemplate } from "./productList.mjs";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const querying = window.location.search;
  const urlParams = new URLSearchParams(querying);
  const productID = urlParams.get(param);
  return productID;
}

async function loadFromPath(path) {
  const res = await fetch(path);

  if (res.ok) {
    const html = res.text();
    return html;
  }
}

export function loadHeaderAndFooter() {
  const headerTemplate = loadFromPath("../partials/header.html").then((data) =>
    renderWithTemplate(data, "body", "afterbegin")
  );

  const footerTemplate = loadFromPath("../partials/footer.html").then((data) =>
    renderWithTemplate(data, "body")
  );
}

export function alertMessage(message, scroll = true) {
  const formatedMessage = `<p>${message}</p>`;

  const htmlContainer = document.querySelector(".errors");
  const errosContainer = document.createElement("div");

  const close = document.createElement("span");
  close.innerText = "x";

  errosContainer.insertAdjacentHTML("beforeend", formatedMessage);
  errosContainer.appendChild(close);

  htmlContainer.appendChild(errosContainer);

  close.addEventListener("click", () => {
    errosContainer.remove();
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function renderWithTemplate(
  template,
  parentElement,
  position = "beforeend"
) {
  const templatedToString = `${template}`.toString();
  // console.log(templatedToString)

  let container = document.querySelector(parentElement);

  container.insertAdjacentHTML(position, templatedToString);
}
