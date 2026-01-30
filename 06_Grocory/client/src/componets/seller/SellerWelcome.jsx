import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SellerWelcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/seller/product-list");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen w-full flex items-center justify-center ">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-gray-400 rounded-2xl shadow-2xl p-10 text-center max-w-md"
            >
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-gray-800"
                >
                    Welcome Seller 👋
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 text-gray-600"
                >
                    You’re now logged in. Let’s manage your products and orders!
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-indigo-600 font-medium"
                >
                    Redirecting to Product page......
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SellerWelcome;
