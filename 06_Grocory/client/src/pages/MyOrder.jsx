import React, { useEffect, useState } from "react";
import { assets, dummyOrders } from "../assets/greencart_assets/assets";

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        setMyOrder(dummyOrders);
    }, []);

    return (
        <div className="m-6 md:m-16 mt-[9vh] min-h-[80vh]">
            <p className="text-2xl md:text-3xl font-semibold mb-6">
                My Orders
            </p>

            {myOrder.map((order, index) => (
                <div
                    key={order._id || index}
                    className="mb-10 rounded-lg border border-gray-300"
                >
                    {/* ORDER HEADER */}
                    <div className="flex flex-wrap justify-between gap-4 p-4 bg-gray-50 font-medium">
                        <span className="w-full">Order ID: {order._id}</span>
                        <span>Payment: {order.paymentType}</span>
                        <span>Total: ₹{order.amount}</span>
                    </div>

                    {/* ORDER ITEMS */}
                    {order.items.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col md:flex-row md:items-center justify-between p-4 ${order.items.length !== idx + 1
                                ? "border-b"
                                : ""
                                }`}
                        >

                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="p-4 rounded-lg">
                                    <img src={item.product.image[0]} alt=""
                                        className="w-16 h-16"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h2>{item.product.name}</h2>
                                    <p>{item.product.category}</p>
                                </div>
                            </div>
                            <div className="text-lg font-medium">
                                <p>Quantity: {item.quantity || "1"}</p>
                                <p>Status: {order.status}</p>
                                <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                            </div>
                            <p className="text-lg">
                                Amount :₹{item.product.offerPrice * item.quantity}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MyOrder;
