import axios from "axios";

const API = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export default API;

//https://fakeapi.platzi.com/en/rest/products/