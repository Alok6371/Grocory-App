import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/greencart_assets/assets'
import { BsCart3 } from "react-icons/bs"

const ProductCards = ({ product }) => {
  const {
    navigate,
    addToCart,
    removeCart,
    cartItem
  } = useContext(AppContext)

  if (!product) return null

  return (
    <div
      onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product._id}`)}
      className="border border-gray-200 rounded-lg bg-white 
                 w-full sm:min-w-56 sm:max-w-56 cursor-pointer
                 p-1 sm:p-4 
                 hover:shadow-md transition">

      {/* Image */}
      <div className="flex items-center justify-center bg-gray-50 rounded-md p-2">
        <img
          src={product.image[0]}
          alt={product.name}
          className="h-28 sm:h-36 object-contain transition-transform hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-2">
        <p className="text-xs sm:text-sm text-gray-400">{product.category}</p>
        <p className="text-sm sm:text-base font-semibold text-gray-700 truncate">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          {Array(5).fill("").map((_, i) => (
            <img
              key={i}
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              className="w-3 sm:w-3.5"
              alt=""
            />
          ))}
          <span className="text-xs text-gray-500">(4)</span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm sm:text-lg font-semibold text-indigo-600">
            ₹{product.offerPrice}
            <span className="text-xs sm:text-sm text-gray-400 line-through ml-1">
              ₹{product.price}
            </span>
          </p>

          {/* Cart Buttons */}
          <div onClick={(e) => e.stopPropagation()}>
            {!cartItem[product._id] ? (
              <button
                onClick={() => addToCart(product._id)}
                className="flex items-center gap-1 
                           bg-indigo-100 text-indigo-600 
                           border border-indigo-300 
                           text-xs sm:text-sm
                           px-3 py-1 rounded-md">
                <BsCart3 />
                Add
              </button>
            ) : (
              <div className="flex items-center bg-indigo-100 rounded-md overflow-hidden">
                <button
                  onClick={() => removeCart(product._id)}
                  className="px-2 text-indigo-700 font-bold">
                  -
                </button>

                <span className="px-2 text-sm font-semibold">
                  {cartItem[product._id]}
                </span>

                <button
                  onClick={() => addToCart(product._id)}
                  className="px-2 text-indigo-700 font-bold">
                  +
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductCards
