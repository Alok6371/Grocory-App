import React, { useEffect, useState } from "react";
import { assets, dummyOrders } from "../../assets/greencart_assets/assets";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(dummyOrders);
    }, []);

    return (
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>

            {orders.map((order, index) => (
                <div
                    key={order._id || index}
                    className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
                >
                    {/* ITEMS */}
                    <div className="flex gap-5">
                        <img
                            className="w-12 h-12 object-cover opacity-60"
                            src={assets.box_icon}
                            alt="box"
                        />

                        <div className="space-y-1">
                            {order.items.map((item, idx) => (
                                <p key={idx} className="font-medium">
                                    {item.product.name}
                                    {item.quantity > 1 && (
                                        <span className="text-indigo-500 ml-1">
                                            x {item.quantity}
                                        </span>
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="text-sm">
                        <p className="font-medium mb-1">
                            {order.address.firstName} {order.address.lastName}
                        </p>
                        <p>
                            {order.address.street}, {order.address.city},{" "}
                            {order.address.state}, {order.address.zipcode},{" "}
                            {order.address.country}
                        </p>
                    </div>

                    {/* AMOUNT */}
                    <p className="font-medium text-base text-black/70">
                        ${order.amount}
                    </p>

                    {/* META */}
                    <div className="flex flex-col text-sm">
                        <p>Method: {order.paymentType}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p>
                            Payment:{" "}
                            <span
                                className={`font-medium ${order.isPaid ? "text-green-600" : "text-red-500"
                                    }`}
                            >
                                {order.isPaid ? "Paid" : "Pending"}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;
