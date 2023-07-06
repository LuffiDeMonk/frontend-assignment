const ProductCardLoading = () => {
  return (
    <div className="h-[20rem] border border-red-300 p-2 space-y-4">
      <div className="w-full h-52 overflow-hidden border border-gray-100">
        <div className="w-full h-full bg-gray-400 animate-pulse"></div>
      </div>
      <div className="text-lg font-bold">
        <div className="w-full h-3 rounded-full bg-gray-400 animate-pulse"></div>
      </div>
      <div className="text-sm font-light">
        <div className="w-full h-3 rounded-full bg-gray-400 animate-pulse"></div>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-xl font-bold text-blue-500">
          <div className="w-16 h-3 rounded-full bg-gray-400 animate-pulse"></div>
        </span>
      </div>
    </div>
  );
};

export default ProductCardLoading;
