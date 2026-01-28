import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ProductCards from '../ProductCards'

const BestSeller = () => {
    const { products } = useContext(AppContext)


    return (
        <div className='mt-10 h-[100%] relative scroll-mt-24' id='bestSeller'>
            <p className='text-2xl p-0 font-medium md:text-4xl'>Best Seller</p>
            <div className='my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-center justify-center'>
                {
                    products
                        .filter((product) => product.inStock)
                        .slice(0, 5)
                        .map((product, index) => (
                            <ProductCards key={index} product={product}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default BestSeller