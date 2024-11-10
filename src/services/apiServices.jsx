import axios from "axios";

const getAllUser = () => {
  return axios.get("http://localhost:3003/users");
};

export { getAllUser };
