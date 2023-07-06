import { useQuery } from "react-query";

import { getProductData } from "./Api";

const productByCategory = async (category) => {
  const { data } = await getProductData.get(`/category/${category}?limit=0`);
  return data;
};

const singleProduct = async (id) => {
  const { data } = await getProductData.get(`/${id}`);
  return data;
};

const searchProduct = async (term) => {
  const response = await getProductData.get(`/search?q=${term}`);
  return response;
};

export const getSingleProduct = (id) => {
  const { data: product } = useQuery(["product", id], () => singleProduct(id), {
    refetchOnWindowFocus: false,
  });
  return product;
};

export const getSearchProduct = (term) => {
  const {
    data: searchData,
    isLoading: searching,
    isError: searchError,
  } = useQuery(["search", term], () => searchProduct(term), {
    refetchOnWindowFocus: false,
  });
  return { searchData, searching, searchError };
};

export const getProductByCategory = (category) => {
  const { data, isLoading } = useQuery(
    ["product", category],
    () => productByCategory(category),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        let products = data?.products;
        return products;
      },
    }
  );
  return { data, isLoading };
};
