import { useQuery } from "react-query";

import { getProductData } from "./Api";

//fetcher function to get the data based on product category
const productByCategory = async (category) => {
  const { data } = await getProductData.get(`/category/${category}?limit=0`);
  return data;
};

//fetcher function to get data of individual product
const singleProduct = async (id) => {
  const { data } = await getProductData.get(`/${id}`);
  return data;
};

//fetcher function to get data of searched product
const searchProduct = async (term) => {
  const response = await getProductData.get(`/search?q=${term}`);
  return response;
};

//query for extracting the data of individual product based on the product ID
export const getSingleProduct = (id) => {
  const { data: product, isLoading: singleProductLoading } = useQuery(
    ["product", id],
    () => singleProduct(id),
    {
      //to stop refetching of data when the window is reopened
      refetchOnWindowFocus: false,
    }
  );
  return { product, singleProductLoading };
};

//query to extract the search results based on term passed as argument
export const getSearchProduct = (term) => {
  const {
    data: searchData,
    isLoading: searching,
    isError: searchError,
  } = useQuery(["search", term], () => searchProduct(term), {
    //to stop refetching of data when the window is reopened
    refetchOnWindowFocus: false,
  });
  return { searchData, searching, searchError };
};

//query to extract the data based on category
export const getProductByCategory = (category) => {
  const { data, isLoading } = useQuery(
    ["product", category],
    () => productByCategory(category),
    {
      refetchOnWindowFocus: false,
      //filter the data so that only products array is returned from the API Response
      select: (data) => {
        let products = data?.products;
        return products;
      },
    }
  );
  return { data, isLoading };
};
