import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext(null)

const AppContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(true)

    //Seller pat
    const [isSeller, setIsSeller] = useState(true)

    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setproduct] = useState([])
    const [cartItem, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    /// fetch All Prdoduct data
    const fetchProducts = async () => {

        setproduct(dummyProducts);
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    ///add product in Cart
    const addToCart = (itemsId) => {
        let cartData = { ...cartItem };
        if (cartData[itemsId]) {
            cartData[itemsId] += 1;
        } else {
            cartData[itemsId] = 1;
        }
        setCartItems(cartData);
        toast.success("added to Cart")
    }

    // update card item quantity
    const updateCardItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart updated")
    }

    // Total Cart items
    const CartCount = () => {
        let totalCount = 0;
        for (const item in cartItem) {
            totalCount += cartItem[item]
        }
        return totalCount;
    }

    //Total cart items
    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items)
            if (cartItem[items] > 0) {
                totalAmount += cartItem[items] * itemInfo.offerPrice
            }
        }
        return Math.floor(totalAmount * 1000) / 1000
    }

    //Remove Product from Cart
    const removeCart = (itemId) => {
        let cartData = structuredClone(cartItem);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
            toast.success("Removed From Cart")
            setCartItems(cartData)
        }
    }


    const value = {
        navigate,

        //seller Part
        isSeller,
        setIsSeller,

        ////User Login Functions
        user,
        setUser,
        showUserLogin,
        setShowUserLogin,

        ////products Data 
        products,

        /////////Cart Functions
        addToCart,
        updateCardItem,
        CartCount,
        totalCartAmount,
        removeCart,
        cartItem,

        ///Products Search
        searchQuery,
        setSearchQuery

    }
    return (
        < AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
// 2.27.40