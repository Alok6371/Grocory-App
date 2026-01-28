import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../context/AppContext"
import { categories } from '../assets/greencart_assets/assets'

const ProductCategory = () => {

  const { products, navigate } = useContext(AppContext)
  const { category } = useParams();
  const searchCategory = categories.find((item) => item.path.toLocaleLowerCase() === category.toLocaleLowerCase())


  const filteredProducts = products.filter((product) => product.category.toLocaleLowerCase() === category.toLocaleLowerCase())
 
  return (
    <div className='mt-[10vh]'>
      {
        searchCategory && (
          <div className='flex flex-col items-end w-max'>
            <h1>categories : {searchCategory.text.toLocaleLowerCase()}</h1>
          </div>
        )
      }

    </div>
  )
}

export default ProductCategory
