import { Outlet } from "react-router"
import Navbar from "../Componenets/Header/Navbar"
import Footer from "../Componenets/Footer/Footer"
import { ProductContext } from "../ProductContext"
import { useState } from "react"
function Root() {
  const [productId , setProductId] = useState('')
  const handleProductId = id => {
    setProductId(id)
  }
  return (
    <div className="container mx-auto">
       <ProductContext.Provider value={{ productId, handleProductId}}>
         <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
       </ProductContext.Provider>
    </div>
  )
}

export default Root