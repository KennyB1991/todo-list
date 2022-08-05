const baseUrl = "http://localhost:3000/";

async function postTodo(data) {
  log("Making a POST request... Adding todo to database.");
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    log(error);
  });
}

async function getTodo() {
  log(`Making GET request... Attempting get data from server ${baseUrl}`);
  await fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => createElements(data))
    .catch((error) => {
      log(error);
    });
}

async function deleteTodo(postId) {
  log(`Deleting todo item with id: ${postId}`);
  await fetch(baseUrl + postId, {
    method: "DELETE",
    body: JSON.stringify(postId),
  }).catch((error) => {
    log(error);
  });
}
