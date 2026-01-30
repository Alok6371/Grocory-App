import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <div className="px-1  m-16 bottom-0 " >
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <p className="text-[2em] text-orange-800 font-semibold">Grocory App</p>
                    <p className="max-w-[410px] mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">

                    <ul className="text-[1em] space-y-1 flex flex-col">
                        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2 text-[1.1em]">Quick Links</h3>
                        <Link to={"/#home"} >Home</Link>
                        <Link to={"/#bestSeller"}>Best Sellers</Link>
                        <Link to={"/#category"}>Category</Link>
                        <Link >Contact Us</Link>
                        <Link to={"faq"} >FAQs</Link>
                    </ul>

                    <ul className="text-[1em] space-y-1 flex flex-col">
                        <Link
                            to={'/need-help'}
                        >
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2 text-[1.1em]"
                            >Need Help? </h3>
                        </Link>
                        <Link to={"/need-help"}>Delivery Information</Link>
                        <Link to={"/need-help"}>Return & Refund Policy</Link>
                        <Link to={"/need-help"}>Payment Methods</Link>
                        <Link to={"/need-help"}>Track your Order</Link>
                        <Link to={"/need-help"}>Contact Us</Link>
                    </ul>

                    <ul className="text-[1em] space-y-1 flex flex-col">
                        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2 text-[1.1em]">Follow Us</h3>
                        <Link >InstaGram</Link>
                        <Link >Twitter</Link>
                        <Link >Facebook</Link>
                        <Link >YouTube</Link>
                    </ul>
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <Link href="https://prebuiltui.com">PrebuiltUI</Link> All Right Reserved.
            </p>
        </div >
    );
};

export default Footer