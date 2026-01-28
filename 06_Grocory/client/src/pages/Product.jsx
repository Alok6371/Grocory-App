import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import ProductCards from "../componets/ProductCards";

const Product = () => {

    const { products, searchQuery } = useContext(AppContext);
    const [filteredProducts, setFilteredproducts] = useState([])


    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilteredproducts(
                products.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        }
        else {
            setFilteredproducts(products)
        }
    }, [products, searchQuery])
    return (
        <div className=' mt-[10vh]'>
            <h1 className="text-3xl lg:text-4xl font-medium">All products</h1>
            <div className="flex flex-wrap gap-[3vw]">
                {
                    filteredProducts.filter((products) => products.inStock).map((product, index) =>
                        <ProductCards key={index} product={product}></ProductCards>
                    )
                }
            </div>
        </div>
    )
}

export default Product