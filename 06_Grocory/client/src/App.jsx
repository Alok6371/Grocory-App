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

const App = () => {

  const { showUserLogin } = useContext(AppContext)
  const location = useLocation()
  const pathname = useLocation()
  const isSellerPath = location.pathname.includes('seller')

  return (

    <div className='text-default min-h-screen '>
      {/* TOASTER */}
      <Toaster
        position="top-center"
        toastOptions={{

          duration: 600,
          // removeDelay: 1000,
        }}
      />
      <ScrollTop />
      {!isSellerPath && <Navbar />}

      {showUserLogin && <Auth />}


      <ScrollToHash />
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
        </Routes>
        <Footer />
      </div>
      {
      }

    </div>
  )
}

export default App
