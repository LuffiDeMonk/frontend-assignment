import React from "react";
import { getSearchProduct } from "../utils/GetProducts";
import { useParams } from "react-router-dom";
import ProductCardLoading from "../components/ProductCard/ProductCardLoading";
import ProductCard from "../components/ProductCard/ProductCard";

const SearchPage = () => {
  const params = useParams();
  const { searchTerm } = params;
  const { searchData, searching, searchError } = getSearchProduct(searchTerm);
  return (
    <div className="max-w-screen-xl mx-auto">
      {searchError === false ? (
        <div className="w-full h-screen flex items-center justify-center mx-auto">
          <img
            src="https://www.shutterstock.com/image-vector/no-data-result-not-found-600w-2043800576.jpg"
            alt=""
            className="w-96 h-96 object-contain"
          />
        </div>
      ) : (
        <>
          <h2 className="text-xl my-6 font-light">{`${searchData?.data?.products?.length} search results found`}</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {searching &&
              Array(5)
                .fill(0)
                .map((item) => <ProductCardLoading />)}
            {searchData?.data?.products?.map((item) => (
              <ProductCard key={item.description} data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
