import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ProductsList = () => {
    const { products } = useContext(AppContext);

    return (
        <div className="flex-1 py-6 md:py-10">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-semibold">All Products</h2>

                {/* ================= MOBILE VIEW (CARDS) ================= */}
                <div className="space-y-4 md:hidden">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white border rounded-xl p-4 shadow-sm flex gap-3"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 rounded-lg object-cover border"
                            />

                            <div className="flex-1 space-y-1">
                                <p className="font-medium text-sm truncate">
                                    {product.name}
                                </p>

                                <p className="text-xs text-gray-500">
                                    {product.category}
                                </p>

                                <p className="text-sm font-semibold text-green-600">
                                    ₹{product.offerPrice}
                                </p>
                            </div>

                            {/* Stock Toggle */}
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    defaultChecked={product.inStock}
                                />
                                <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>
                                <span className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full transition peer-checked:translate-x-4"></span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* ================= DESKTOP VIEW (TABLE) ================= */}
                <div className="hidden md:block">
                    <div className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm">
                        <table className="w-full">
                            <thead className="bg-gray-50 text-sm text-left">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Product</th>
                                    <th className="px-6 py-4 font-semibold">Category</th>
                                    <th className="px-6 py-4 font-semibold">Selling Price</th>
                                    <th className="px-6 py-4 font-semibold">In Stock</th>
                                </tr>
                            </thead>

                            <tbody className="text-sm text-gray-600">
                                {products.map((product) => (
                                    <tr
                                        key={product._id}
                                        className="border-t hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <img
                                                src={product.image}
                                                alt="Product"
                                                className="w-20 h-20 rounded-md object-cover border"
                                            />
                                            <span className="font-medium text-[20px] text-gray-800">
                                                {product.name}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-[20px] font-bold">
                                            {product.category}
                                        </td>
                                        <td className="px-6 py-4 text-[20px] font-bold text-black">
                                            {product.price}
                                        </td>


                                        <td className="px-6 py-4 text-[20px] font-semibold text-black">
                                            ₹{product.offerPrice}
                                        </td>

                                        <td className="px-6 py-4">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    defaultChecked={product.inStock}
                                                />
                                                <div className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition"></div>
                                                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></span>
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductsList;
