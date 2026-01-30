import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const AddProduct = () => {
    const { products } = useContext(AppContext);

    const [category, setCategory] = useState("");

    // get unique categories
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form className=" p-4 space-y-5 max-w-lg">
                {/* Images */}
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4)
                            .fill("")
                            .map((_, index) => (
                                <label key={index} htmlFor={`image${index}`}>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        id={`image${index}`}
                                        hidden
                                    />
                                    <img
                                        className="max-w-24 cursor-pointer"
                                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                                        alt="upload"
                                        width={100}
                                        height={100}
                                    />
                                </label>
                            ))}
                    </div>
                </div>

                {/* Product Name */}
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium">Product Name</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                        required
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium">
                        Product Description
                    </label>
                    <textarea
                        rows={4}
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                        placeholder="Type here"
                    />
                </div>

                {/* Category */}
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price */}
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium">Product Price</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium">Offer Price</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>
                </div>

                <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
