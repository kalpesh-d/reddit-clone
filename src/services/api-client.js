import axios from "axios";

const getAll = async (endpoint) => {
  const response = await axios.get(`https://www.reddit.com/r/${endpoint}`);
  console.log(response);
  return response.data;
};

export default getAll;
