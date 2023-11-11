import { loadHeaderAndFooter } from "./utils.mjs";
import { checkLogin } from "./auth.mjs";
import { getOrders } from "./externalServices.mjs";
import { renderWithTemplate } from "./utils.mjs";
loadHeaderAndFooter();

const token = checkLogin();

const response = getOrders(token);

response.then((data) => {
  console.log(data);
  const lastTenObjects = data.slice(data.length - 10);

  lastTenObjects.map((orders) => {
    renderWithTemplate(renderUserOrders(orders), ".orders");
  });
});

function renderUserOrders(data) {
  const date = data.orderDate.split("T");
  const dateFormatted = date[0];
  const html = `
    
        <div class="userorders">
          <p> Name: ${data.fname} ${data.lname}</p>
          <p>Date: ${dateFormatted}</p>
          <p> Address:${data.street} , ${data.zip}, ${data.city}</p>
          <div>
          <p>Total: ${data.orderTotal}$</p>
          <p>Items purchased: (${data.items.length})</p>
          </div
      </div>

      `;
  return html;
}
