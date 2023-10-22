function convertToJson(res) {
  // console.log(res)
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

const URI = import.meta.env.VITE_SERVER_URL;

export async function getData(category = "tents") {
  
  const response = await fetch(`${URI}products/search/${category}`);
  const data = await convertToJson(response);

  console.log(data)
  return data.Result;


}

console.log('changes!!!!')


export async function findProductById(id) {
  console.log()
  const response = await fetch(`${URI}${id}`)
  const data = await convertToJson(response)
 
  return data.Result;
  
  
}


