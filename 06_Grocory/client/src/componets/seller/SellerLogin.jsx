import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useContext(AppContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("All fields are required");
            return;
        }

        console.log("Seller Login:", email, password);

        // example login success
        setIsSeller(true);
        toast.success("Seller Logged In");
        navigate("/seller");
    };

    return (
        !isSeller &&
        <motion.div className="flex items-center justify-center min-h-[100vh] bg-gray-400">
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-[80vw] sm:w-[350px] bg-gray-300 rounded-2xl px-8 py-10"
            >
                <h1 className="text-black text-3xl font-medium text-center mb-6">
                    Seller Login
                </h1>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email ID"
                        className="w-full h-12 px-6 rounded-full outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 px-6 rounded-full outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full h-11 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition"
                >
                    Login
                </button>
            </motion.form>
        </motion.div>
    );
};

export default SellerLogin;
