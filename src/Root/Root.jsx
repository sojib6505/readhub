import { Outlet } from "react-router"
import Navbar from "../Componenets/Header/Navbar"
import Footer from "../Componenets/Footer/Footer"
function Root() {
  return (
    <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root