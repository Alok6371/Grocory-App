import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="px-3 md:px-10 m-4 md:m-16">
            <div className="
        flex flex-col md:flex-row
        items-start justify-between
        gap-8
        py-8
        border-b border-gray-500/30
        text-gray-500
      ">
                {/* LEFT SECTION */}
                <div>
                    <p className="text-xl md:text-2xl text-orange-800 font-semibold">
                        Grocory App
                    </p>
                    <p className="max-w-sm mt-3 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
                        quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
                    </p>
                </div>

                {/* RIGHT SECTION */}
                <div className="
          flex flex-wrap
          justify-between
          w-full md:w-[45%]
          gap-6
          text-sm
        ">
                    {/* QUICK LINKS */}
                    <ul className="space-y-1 flex flex-col">
                        <h3 className="
              font-semibold
              text-gray-900
              mb-2 md:mb-4
              text-sm md:text-base
            ">
                            Quick Links
                        </h3>
                        <Link to="/#home">Home</Link>
                        <Link to="/#bestSeller">Best Sellers</Link>
                        <Link to="/#category">Category</Link>
                        <Link>Contact Us</Link>
                        <Link to="/faq">FAQs</Link>
                    </ul>

                    {/* NEED HELP */}
                    <ul className="space-y-1 flex flex-col">
                        <Link to="/need-help">
                            <h3 className="
                font-semibold
                text-gray-900
                mb-2 md:mb-4
                text-sm md:text-base
              ">
                                Need Help?
                            </h3>
                        </Link>
                        <Link to="/need-help">Delivery Information</Link>
                        <Link to="/need-help">Return & Refund Policy</Link>
                        <Link to="/need-help">Payment Methods</Link>
                        <Link to="/need-help">Track your Order</Link>
                        <Link to="/need-help">Contact Us</Link>
                    </ul>

                    {/* FOLLOW US */}
                    <ul className="space-y-1 flex flex-col">
                        <h3 className="
              font-semibold
              text-gray-900
              mb-2 md:mb-4
              text-sm md:text-base
            ">
                            Follow Us
                        </h3>
                        <Link>Instagram</Link>
                        <Link>Twitter</Link>
                        <Link>Facebook</Link>
                        <Link>YouTube</Link>
                    </ul>
                </div>
            </div>

            {/* COPYRIGHT */}
            <p className="
        py-3
        text-center
        text-xs md:text-sm
        text-gray-500/80
      ">
                Copyright 2025 ©{" "}
                <a
                    href="https://prebuiltui.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    PrebuiltUI
                </a>{" "}
                All Rights Reserved.
            </p>
            <Link to={'/seller'}>
            become A Seller</Link>
        </footer>
    );
};

export default Footer;
