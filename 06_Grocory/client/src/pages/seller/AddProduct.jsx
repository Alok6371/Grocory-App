import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/greencart_assets/assets";

const AddProduct = () => {
  const { products, setNewProduct } = useContext(AppContext);

  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItemData = {
      id: Date.now(),
      name,
      price,
      description,
      category,
      offerPrice,
      images: files,
    };

    setNewProduct(newItemData);

    // reset
    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    setOfferPrice("");
    setFiles([]);
  };

  return (
    <div className="py-6 bg-white">
      <h2 className="pb-4 text-lg font-semibold">Add product</h2>

      <form onSubmit={handleSubmit} className="p-4 space-y-5 max-w-lg">
        {/* Images */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex gap-3 mt-2">
            {Array(4).fill("").map((_, index) => (
              <label key={index}>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const updated = [...files];
                    updated[index] = e.target.files[0];
                    setFiles(updated);
                  }}
                />
                <img
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : assets.upload_area
                  }
                  className="w-24 h-24 object-cover cursor-pointer"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Product name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />

        {/* Description */}
        <textarea
          rows={3}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <input
          type="number"
          placeholder="Offer Price"
          onChange={(e) => setOfferPrice(e.target.value)}
          className="border p-2 w-full"
        />

        <button className="bg-indigo-500 text-white px-6 py-2 rounded">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
