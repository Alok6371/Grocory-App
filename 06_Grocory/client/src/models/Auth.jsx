import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";


const Auth = () => {
    // toggle between login & register
    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setShowUserLogin, setUser } = useContext(AppContext)


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("name", name, "email", email, "password", password)
        if (state === "login" && !name && !email && !password) {
            console.log("Login Data:", {
                email: formData.email,
                password: formData.password,
            });
            setUser(true)
            setShowUserLogin(false)
        } else {
            console.log("Register Data:", formData);
            setUser(true)
            setShowUserLogin(false)
        }

        // reset form (optional)
        setFormData({
            name: "",
            email: "",
            password: "",
        });
    };



    return (
        <>
            <motion.div
                className=" relative z-1000 flex items-center justify-center  min-h-[90vh] overflow-hidden scroll-none">
                <motion.form
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[80vw] sm:w-[350px]   text-center bg-black/6 border border-black/10 rounded-2xl px-8 bg-gray-300"
                >
                    <h1 className="text-black text-3xl mt-10 font-medium">
                        {state === "login" ? "Login" : "Sign up"}
                    </h1>

                    <p className="text-green-500 text-sm mt-2">
                        Please sign in to continue
                    </p>

                    {/* Name field (only for signup) */}
                    {state !== "login" && (
                        <div className="flex items-center mt-6 w-full border-blue-700 bg-black/5 ring-2 ring-black/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full bg-transparent text-black placeholder-black/60 outline-none "
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div className="flex items-center w-full mt-4 bg-black/5 ring-2 ring-black/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email id"
                            className="w-full bg-transparent text-black placeholder-black/60 outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center mt-4 w-full bg-black/5 ring-2 ring-black/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full bg-transparent text-black placeholder-black/60 outline-none"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Forget password */}
                    {state === "login" && (
                        <div className="mt-4 text-left">
                            <button
                                type="button"
                                className="text-sm text-indigo-400 hover:underline"
                            >
                                Forget password?
                            </button>
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 w-full h-11 rounded-full text-white  bg-indigo-600 hover:bg-indigo-500 transition"
                    >
                        {state === "login" ? "Login" : "Sign up"}

                    </button>

                    {/* Toggle */}
                    <p
                        onClick={() =>
                            setState((prev) =>
                                prev === "login" ? "register" : "login"
                            )
                        }
                        className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
                    >
                        {state === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                        <span className="text-indigo-400 hover:underline ml-1">
                            Click here
                        </span>
                    </p>
                </motion.form>
            </motion.div>
            {/* Soft backdrop */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl" />
                <div className="absolute right-12 bottom-10 w-[260px] h-[140px] bg-gradient-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl" />
            </div>
        </>
    );
};

export default Auth;
