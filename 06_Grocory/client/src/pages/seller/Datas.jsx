import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Datas = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Products</h2>

      {products.length === 0 && <p>No products added yet</p>}

      <div className="grid grid-cols-3 gap-4">
        {products.map((item) => (
          <div key={item.id} className="border p-3 rounded">
            <img
              src={
                item.images?.[0]
                  ? URL.createObjectURL(item.images[0])
                  : "https://via.placeholder.com/200"
              }
              className="w-full h-40 object-cover"
            />

            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: ₹{item.price}</p>
            <p>Offer: ₹{item.offerPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datas;
