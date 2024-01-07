import axios from "axios";

const getAll = async (endpoint) => {
  // console.log(`https://www.reddit.com/${endpoint}`);
  const response = await axios.get(`https://www.reddit.com${endpoint}`);
  return response.data;
};

export default getAll;
