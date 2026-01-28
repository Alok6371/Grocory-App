import { useParams } from 'react-router-dom'

const ProductCategory = () => {
  const { category } = useParams()

  return (
    <div>
      <h1 className='text-2xl font-semibold mt-[10vh]'>
        Category: {category}
      </h1>

      {/* filter products by category */}
    </div>
  )
}

export default ProductCategory
