import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import Homepage from './Pages/Homepage/Homepage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Contact from './Pages/Contact/Contact'
import AppPage from './Pages/AppPage/AppPage'
import Products from './Pages/Products/Products'
import MyAccount from './Pages/MyAccount/MyAccount'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/AppPage' element={<AppPage />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/MyAccount" element={<MyAccount />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
