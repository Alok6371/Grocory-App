import React from "react";
import { assets } from "../../assets/greencart_assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative mt-0  pt-20 rounded-lg ">
            {/* Desktop */}
            <img
                src={assets.main_banner_bg}
                alt=""
                className="hidden md:block w-full rounded-lg  "
            />

            {/* Mobile */}
            <img
                src={assets.main_banner_bg_sm}
                alt=""
                className="md:hidden h-[50vh] rounded-[20px] w-full object-cover -mt-10 pt-10"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start px-6 md:px-18 lg:px-24 ">
                <h1 className="text-3xl   mt-40 sm:mt-0 font-bold  sm:text-black text-center md:text-left max-w-[18rem] md:max-w-[25rem] leading-tight lg:text-2xl xl:text-4xl md:text-3xl">
                    Freshness You Can Trust, Savings You’ll Love
                </h1>

                <div className="flex items-center mt-6 font-medium gap-6">
                    <Link
                        to="/products"
                        className="flex items-center gap-2 bg-[#4b0082] px-7 py-3 rounded-full  cursor-pointer text-white hover:bg-blue-500 transition"
                    >
                        Shop Now
                        <img src={assets.white_arrow_icon} alt="" className="md:hidden transition group-focus:translate-x-1 " />
                    </Link>
                    <Link
                        to="/products"
                        className=" hidden md:flex items-center gap-2 bg-[#4b0082] px-7 py-3 rounded-full  cursor-pointer text-white hover:bg-blue-500 transition"
                    >
                        Explore Details
                        <img src={assets.white_arrow_icon} alt="" className="md:hidden transition group-focus:translate-x-1 " />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
