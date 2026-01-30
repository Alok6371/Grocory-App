import React, { useContext } from "react";
import { assets } from "../../assets/greencart_assets/assets";
import { NavLink, Outlet, Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const SellerLayout = () => {
  const { setIsSeller, navigate } = useContext(AppContext);

  const sidebarLinks = [
    {
      name: "Add",
      path: "/seller/add-product",
      icon: <img src={assets.add_icon} alt="" className="w-6" />,
    },
    {
      name: "Products",
      path: "/seller/product-list",
      icon: <img src={assets.product_list_icon} alt="" className="w-6" />,
    },
    {
      name: "Orders",
      path: "/seller/orders",
      icon: <img src={assets.order_icon} alt="" className="w-6" />,
    },
  ];

  const handleLogout = () => {
    navigate("/seller");
    setIsSeller(false);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVBAR - ALWAYS TOP */}
      <div className="fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-4 md:px-8 border-b border-gray-300 bg-gray-500 z-50">
        <Link to="/seller">
          <h1 className="text-xl md:text-2xl font-semibold text-orange-600">
            Grocery App
          </h1>
        </Link>

        <button  
          onClick={handleLogout}
          className="border rounded-full text-white text-sm px-4 py-1"
        >
          Logout
        </button>
      </div>

      {/* BODY */}
      <div className="flex flex-1 pt-14">

        {/* SIDEBAR - DESKTOP (LEFT) */}
        <div className="hidden fixed md:flex w-64 border-r border-gray-300 pt-4 flex-col">
          {sidebarLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}

              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 transition
                ${isActive
                  ? "border-r-4 bg-indigo-500/10 text-[1.5em] border-indigo-500 text-indigo-500"
                  : "hover:bg-gray-100/90 text-gray-700"
                }`
              }
            >
              {item.icon}
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* PAGE CONTENT */}
        <div className="flex-1 md:ml-[15%]   p-4 md:p-6 pb-20 md:pb-6">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR - MOBILE (BOTTOM TAB BAR) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 flex justify-around items-center border-t bg-white z-50">
        {sidebarLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex flex-col items-center text-xs
              ${isActive ? "text-indigo-600" : "text-gray-600"}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SellerLayout;
