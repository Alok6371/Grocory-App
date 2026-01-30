import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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

const App = () => {
  const location = useLocation();
  const { isSeller, showUserLogin } = useContext(AppContext);

  const isSellerPath = location.pathname.startsWith("/seller");

  return (
    <div className="text-default min-h-screen">
      {/* TOASTER */}
      <Toaster position="top-center" toastOptions={{ duration: 600 }} />

      <ScrollTop />
      <ScrollToHash />

      {/* Navbar */}
      {!isSellerPath && <Navbar />}

      {/* Auth Modal */}
      {showUserLogin && <Auth />}

      {/* ROUTES */}
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

        {/* SELLER DASHBOARD (PROTECTED) */}
        <Route
          path="/seller"
          element={isSeller ? <SellerLayout /> : <SellerLogin />}
        >
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductsList />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>

      {/* Footer */}
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
