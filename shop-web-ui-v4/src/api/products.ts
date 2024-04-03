import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

export const getProducts = async () => {
  return await axios.get("/products");
};

export const getReviews = async (productId: string) => {
  return await axios.get(`/products/${productId}/reviews`);
};

export const addReview = async (productId: string, review: any) => {
  return await axios.post(`/products/${productId}/reviews`, review);
};
