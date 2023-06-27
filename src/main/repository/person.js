import axios from "axios"
import application from "../../resources/application.json";

axios.defaults.baseURL = application.backend;

const person = {
  fetchAllPerson: async () => {
    const response = await axios.get("/path/to/request");
    return response.data;
  }
}
export default person;