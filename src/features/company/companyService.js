import axios from "axios";
import { base_url } from "../../utils/base_url";

// Attaching the token
const getTokenFromLocalStorage = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

// Attaching the token ends here

const getCompanies = async () => {
  const response = await axios.get(`${base_url}user/getAllCompanies`);
  return response.data;
};

const companyService = {
  getCompanies
};

export default companyService;
