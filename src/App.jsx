import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import SearchPage from "./pages/SearchPage";

const client = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <div className="font-Nunito">
          <Navbar />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/:category/:productID"
                element={<ProductDetails />}
              />
              <Route path="/search/:searchTerm" element={<SearchPage />} />
            </Routes>
          </AnimatePresence>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
