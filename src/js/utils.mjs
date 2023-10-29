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
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderListWithTemplate(
  templatefn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const parent = document.querySelector(parentElement);
  if (!clear) {
    list.forEach((detail) => {
      const htmlToRender = templatefn(detail);
      parent.insertAdjacentHTML(position, htmlToRender);
    });
  }
}

export async function renderWithTemplate(
  templatefn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlData = await templatefn(data);
  parentElement.insertAdjacentHTML(position, htmlData);
  if (callback) {
    callback(data);
  }
}
function loadTemplate(path) {
  //currying is awesome
  return async function () {
    const response = await fetch(path);
    if (response.ok) {
      const data = await response.text();
      return data;
    }
  };
}

export function loadHeaderFooter() {
  const headerTemplatefn = loadTemplate("/partials/header.html");
  const footerTemplatefn = loadTemplate("/partials/footer.html");
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");
  renderWithTemplate(headerTemplatefn, header);
  renderWithTemplate(footerTemplatefn, footer);
}
