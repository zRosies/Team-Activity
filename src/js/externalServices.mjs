function convertToJson(res) {
  // console.log(res)
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
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


export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await fetch(URI + "checkout/", options).then(convertToJson);
}


