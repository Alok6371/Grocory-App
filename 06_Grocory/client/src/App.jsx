import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ProductCategory from "./pages/ProductCategory";
import MyOrder from "./pages/MyOrder";
import Navbar from "./componets/Navbar";
import Auth from "./models/Auth";
import { AppContext } from "./context/AppContext";
import ScrollTop from "./ScrollTop";
import Footer from "./componets/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToHash from "./ScrollToHash";
import NeedHelp from "./componets/footer/NeedHelp";
import Faq from "./componets/footer/Faq";
import AddAddress from "./pages/AddAddress";

import SellerLayout from "./pages/seller/SellerLayout";
import SellerLogin from "./componets/seller/SellerLogin";
import AddProduct from "./pages/seller/AddProduct";
import ProductsList from "./pages/seller/ProductsList";
import Orders from "./pages/seller/Orders";
import SellerWelcome from "./componets/seller/SellerWelcome";

const App = () => {
  const location = useLocation();
  const { isSeller, showUserLogin } = useContext(AppContext);

  // Check if current path is seller
  const isSellerPath = location.pathname.startsWith("/seller");

  // Show USER login only for non-seller routes
  if (showUserLogin && !isSellerPath) {
    return (
      <>
        <Toaster position="top-center" toastOptions={{ duration: 600 }} />
        <Auth />
      </>
    );
  }

  return (
    <div className="text-default min-h-screen">
      <Toaster position="top-center" toastOptions={{ duration: 600 }} />

      <ScrollTop />
      <ScrollToHash />

      {/* Navbar only for users */}
      {!isSellerPath && <Navbar />}

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:category/:id" element={<ProductDetails />} />
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/need-help" element={<NeedHelp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/add-address" element={<AddAddress />} />

        {/* SELLER ROUTES */}
        <Route
          path="/seller"
          element={isSeller ? <SellerLayout /> : <SellerLogin />}
        >
          <Route index element={<SellerWelcome />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductsList />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>

      {/* Footer only for users */}
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
