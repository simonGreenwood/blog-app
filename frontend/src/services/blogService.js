import axios from "axios";
const baseUrl = "http://localhost:3001/blogs";
const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(await axios.get(baseUrl))
  return response.data
}
const createNew = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data
}
export default { getAll, createNew }