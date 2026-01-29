import { Routes, Route, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import "./App.css"


import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import ProductCategory from './pages/ProductCategory'
import MyOrder from './pages/MyOrder'
import Navbar from './componets/Navbar'
import Auth from './models/Auth'
import { AppContext } from './context/AppContext'
import ScrollTop from './ScrollTop'
import Footer from './componets/Footer'
import { Toaster } from 'react-hot-toast'
import ScrollToHash from './ScrollToHash'
import NeedHelp from './componets/footer/NeedHelp'
import Faq from './componets/footer/Faq'
import AddAddress from './pages/AddAddress'
import SellerLayout from './pages/seller/SellerLayout'
import SellerLogin from './componets/seller/SellerLogin'
import AddProduct from './pages/seller/AddProduct'
import ProductsList from './pages/seller/ProductsList'
import Orders from './pages/seller/Orders'


const App = () => {

  const pathname = useLocation()
  const location = useLocation()

  const { isSeller, showUserLogin } = useContext(AppContext)
  const isSellerPath = location.pathname.includes('seller')


  return (

    <div className='text-default min-h-screen '>
      {/* TOASTER */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 600,
        }}
      />

      <ScrollTop />
      <ScrollToHash />


      {isSellerPath ? null : <Navbar />}

      {showUserLogin ? <Auth /> : null}


      <div className='px-6 md:px-16 lg:px-24 xl:px-32 h-[90vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-orders' element={<MyOrder />} />
          <Route path='/need-help' element={<NeedHelp />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/add-address' element={<AddAddress />} />

          <Route path='/seller'
            element={isSeller ?
              <SellerLayout /> :
              <SellerLogin />} >
            <Route index 
            path='add-product'
            element={isSeller ? <AddProduct /> : null} />
            <Route path='product-list'
              element={isSeller ? <ProductsList /> : null}
            />
            <Route path='orders'
              element={isSeller ? <Orders /> : null}
            />
          </Route>

        </Routes>
        {
          isSellerPath ? null : <Footer />
        }
      </div>
    </div>
  )
}

export default App
