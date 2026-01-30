import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/greencart_assets/assets";

const AddProduct = () => {
    const { products } = useContext(AppContext);

    const [files, setFiles] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [offerPrice, setOfferPrice] = useState('')



    // get unique categories
    const categories = [...new Set(products.map(p => p.category))];


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, price, description, category, offerPrice, files);

    }

    return (
        <div className="py-6  flex flex-col justify-between bg-white">
            <h2 className="pb-4 text-lg font-semibold">Add product</h2>
            <form
                onSubmit={handleSubmit}
                className=" p-4 space-y-5 max-w-lg">
                {/* Images */}
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4)
                            .fill("")
                            .map((_, index) => (
                                <label key={index} htmlFor={`image${index}`}>
                                    <input
                                        onChange={(e) => {
                                            const updatedFiles = [...files]
                                            updatedFiles[index] = e.target.files[0]
                                            setFiles(updatedFiles)
                                        }}
                                        accept="image/*"
                                        type="file"
                                        id={`image${index}`}
                                        hidden
                                    />
                                    <img
                                        className="max-w-24 cursor-pointer"
                                        src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setDescription(e.target.value)}
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
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium">Offer Price</label>
                        <input
                            type="number"
                            onChange={(e) => setOfferPrice(e.target.value)}
                            placeholder="0"
                            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
