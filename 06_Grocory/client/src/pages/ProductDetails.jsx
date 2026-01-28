import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/greencart_assets/assets";

const ProductDetails = () => {

    const { products, navigate, addToCart, cartItem, removeCart } = useContext(AppContext);
    const { id } = useParams();

    // Find product safely
    const product = products.find(p => p._id === id);

    // Thumbnail must be null at start
    const [thumbnail, setThumbnail] = useState(null);

    // Set thumbnail when product loads
    useEffect(() => {
        if (product) {
            setThumbnail(product.image[0]);
        }
    }, [product]);

    // Prevent crash when product not loaded yet
    if (!product) return null;




    return (
        <div className="max-w-6xl md:h-[80vh] h-[100%] w-full px-6 mt-[10vh]">

            <p>
                <Link to={'/'}>Home</Link> /
                <Link to={'/products'}>Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link> /
                <span className="text-indigo-500"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">

                {/* Image Section */}
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setThumbnail(img)}
                                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                            >
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 text-sm">
                    <h1 className="text-3xl font-medium">{product.name}</h1>
                    <div className="flex">
                        {
                            Array(5)
                                .fill("")
                                .map((_, i) =>
                                    product.rating > i ? (
                                        <img
                                            src={assets.star_icon}
                                        />
                                    ) : (
                                        <img src={assets.star_dull_icon} alt="" />
                                    )
                                )
                        }
                        <p>{product.rating}</p>
                    </div>



                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">₹{product.price}</p>
                        <p className="text-2xl font-medium">₹{product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex flex-col md:flex-row items-center mt-10 gap-4 ">

                        <div onClick={(e) => e.stopPropagation()}>
                            {cartItem?.[product._id] ? (
                                <div className="flex   items-center bg-indigo-100 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => removeCart(product._id)}
                                        className="px-5 py-3 text-lg text-indigo-700 font-bold hover:bg-indigo-200"
                                    >
                                        −
                                    </button>

                                    <span className="px-6 text-lg font-semibold">
                                        {cartItem[product._id]}
                                    </span>

                                    <button
                                        onClick={() => addToCart(product._id)}
                                        className="px-5 py-3 text-lg text-indigo-700 font-bold hover:bg-indigo-200"
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="w-[70vw] md:w-[20vw] py-2.5 text-lg font-semibold bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
                                >
                                    ADD
                                </button>
                            )}


                        </div>

                        <button
                            onClick={() => {
                                if (!cartItem[product._id]) {
                                    addToCart(product._id);
                                    navigate("/cart");

                                } else {
                                    navigate("/cart");
                                }
                            }}
                            className="w-[70vw] md:w-[20vw]  py-2.5 text-lg font-semibold bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
                            Buy Now
                        </button>
                </div>
            </div>

        </div>
        </div >
    );
};

export default ProductDetails;


