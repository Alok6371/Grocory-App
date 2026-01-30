import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext"
import { categories } from '../assets/greencart_assets/assets'
import ProductCards from '../componets/ProductCards'

const ProductCategory = () => {

  const { products, navigate } = useContext(AppContext)
  const { category } = useParams();
  const searchCategory = categories.find((item) => item.path.toLocaleLowerCase() === category.toLocaleLowerCase())


  const filteredProducts = products.filter((product) => product.category.toLocaleLowerCase() === category.toLocaleLowerCase())

  return (
    <div className='mt-[10vh] m-16 h-[80vh]'>
      {
        searchCategory && (
          <div className='flex flex-col items-end w-max'>
            <h1
              className='text-3xl md:text-4xl font-medium'
            > {searchCategory.text.toUpperCase()}</h1>
          </div>
        )
      }
      {
        filteredProducts.length > 0 ? (
          <div>
            <div className='my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center'>
              {
                filteredProducts.map((product, index) => (
                  <ProductCards key={index} product={product} />
                ))
              }
            </div>
          </div>
        ) : (
          <div>
            <h1 className='text-3xl md:text-4xl font-medium'>No Products Found</h1>
          </div>
        )
      }

    </div>
  )
}

export default ProductCategory
