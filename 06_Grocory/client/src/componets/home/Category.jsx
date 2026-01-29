import React, { useContext } from 'react'
import { categories } from '../../assets/greencart_assets/assets'
import { AppContext } from '../../context/AppContext'

const Category = () => {

    const { navigate } = useContext(AppContext)

    return (
        <div className='mt-1 h-[100%] scroll-mt-24' id='category'>
            <p className='text-2xl font-medium md:text-3xl'>Categories</p>

            <div className='my-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`)
                            window.scrollTo(0, 0)
                        }}
                        className='group cursor-pointer m-2 py-5 px-3 rounded-lg flex flex-col items-center'
                        style={{ backgroundColor: category.bgColor }}
                    >
                        <img
                            src={category.image}
                            alt={category.text}
                            className='max-w-20 transition group-hover:scale-110'
                        />
                        <p className='text-sm font-medium'>{category.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
