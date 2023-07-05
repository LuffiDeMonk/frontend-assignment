import axios from "axios";

export const getProductData = axios.create({
  baseURL: "https://dummyjson.com/products",
});
