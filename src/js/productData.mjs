function convertToJson(res) {
  // console.log(res)
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// export async function getData(category = "tents") {
//   return fetch(`../json/${category}.json`)
//     .then(convertToJson)
//     .then((data) => data);
// }

export async function getData(category = "tents") {
  const url = `../json/${category}.json`;

  // Create a request object with the appropriate headers
  const request = new Request(url, {
    method: "GET",
    mode: "cors", // Allow cross-origin requests
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }),
  });

  return fetch(request)
    .then(convertToJson)
    .then((data) => data);
}



export async function findProductById(id) {
  const products = await getData();
  return products.find((item) => item.Id === id);
}


