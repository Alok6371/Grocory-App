import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/greencart_assets/assets";
import toast, { Toaster } from "react-hot-toast";
import Product from "../pages/Product";

const notify = () => toast("Logout Successfully");

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, navigate, setShowUserLogin, CartCount, setSearchQuery } = useContext(AppContext);

  function  SearchButton(){
      navigate('/products')
  }

  return (
    <>


      {/* NAVBAR */}
      <nav className=" h-[8vh] z-10 top-0 fixed w-full border-b border-gray-200 bg-blue-100">
        <div className="max-w-7xl  mx-auto flex items-center justify-between px-6 md:px-12 py-4">

          {/* LOGO */}
          <Link to="/">
            <h1 className="text-2xl font-bold text-orange-600">
              Grocory App
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden sm:flex items-center gap-10">

            <Link to="/" className="hover:text-indigo-500">Home</Link>
            <Link to="/products" className="hover:text-indigo-500">Products</Link>

            {/* SEARCH */}
            <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full">
              <input
                onClick={() => SearchButton()}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1.5 bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search products"
              />
            </div>

            {/* CART */}
            <div
              onClick={() => {
                navigate("/cart");
              }}
              className="relative cursor-pointer"
            >
              <img src={assets.cart_icon} alt="cart" className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {CartCount()}
              </span>
            </div>

            {/* PROFILE (HOVER STAYS VISIBLE) */}
            {user ? (
              <div className="relative group">
                <img
                  src={assets.profile_icon}
                  className="w-10 cursor-pointer"
                  alt="profile"
                />

                <ul
                  className="
                    absolute top-12 right-0
                    bg-white shadow-md rounded-md border text-sm min-w-[120px]

                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible

                    transition-all duration-300 delay-150
                    z-50
                  "
                >
                  <li
                    onClick={() => navigate("/my-orders")}
                    className="px-5 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Orders
                  </li>
                  <li
                    onClick={() => {
                      setUser(false);
                      notify();
                      navigate("/");
                    }}
                    className="px-5 py-2 cursor-pointer hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowUserLogin(true);

                }}
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm">
                Login
              </button>
            )}
          </div>

          {/* MOBILE ICONS */}
          <button
            className="sm:hidden flex items-center gap-4"
          >
            {/* CART */}
            <div
              onClick={() => { navigate("/cart"); setOpen(false) }}
              className="relative cursor-pointer"
            >
              <img src={assets.cart_icon} alt="cart" className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {CartCount()}

              </span>
            </div>

            {/* MENU ICON */}
            <div onClick={() => setOpen(!open)}>
              <svg width="21" height="15" viewBox="0 0 21 15">
                <rect width="21" height="1.5" rx=".75" fill="#426287" />
                <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
              </svg>
            </div>
          </button>
        </div>

        {/* MOBILE MENU (OVERLAYS CONTENT) */}
        {open && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 px-6 py-4 flex justify-between items-start">

            {/* LINKS */}
            <div className="flex flex-col gap-2">
              <Link onClick={() => setOpen(false)} to="/">Home</Link>
              <Link onClick={() => setOpen(false)} to="/products">Products</Link>
            </div>

            {/* PROFILE */}
            <div>
              {user ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/my-orders");
                    }}
                    className="text-left"
                  >
                    Orders
                  </button>
                  <button
                    onClick={() => {
                      setUser(false);
                      setOpen(false);
                      notify();
                      navigate("/");
                    }}
                    className="text-left text-red-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowUserLogin(true);
                    setOpen(false);

                  }}
                  className="px-6 py-2;
                   bg-indigo-500 text-white rounded-full text-sm">
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
