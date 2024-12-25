import instance from "./index";

async function getAllItems() {
  const response = await instance.get("/mini-project/api/items");
  return response;
}
async function getItemById(id) {
  const response = await instance.get(`/mini-project/api/items/${id}`);
  return response;
}

export { getAllItems, getItemById };
