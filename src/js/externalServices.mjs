// import {alertMessage} from "./utils.mjs"

async function convertToJson(res) {
  console.log(res)
  const data = await res.json();
  if (res.ok) {
    console.log(data);
    return data;
  } else {
    throw {name: "servicesError", message: data};
    
  }
}

const URI = import.meta.env.VITE_SERVER_URL;

export async function getProductsByCategory(category = "tents") {

  const response = await fetch(URI + `/products/search/${category}`);
  console.log(response)
  const data = await convertToJson(response);

  console.log(data)
  return data.Result;


}


export async function findProductById(id) {
  console.log()
  const response = await fetch(`${URI}/product/${id}`)
  const data = await convertToJson(response)
 
  return data.Result;
  
  
}


export async function postForm(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),

  };

  const url = URI + "/checkout";

  return convertToJson(await fetch(URI + "/checkout", options));
 
}


