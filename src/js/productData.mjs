function convertToJson(res) {
  // console.log(res)
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}



export async function getData(category = "tents") {
  const URI = import.meta.env.VITE_API;
  const response = await fetch(`${URI}products/search/${category}`);
  const data = await convertToJson(response);

  console.log(data)
  return data.Result;


}



export async function findProductById(id,category) {
  console.log(category)
  const products = await getData(category);
  return products.find((item) => item.Id === id);
}


