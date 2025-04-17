import { Outlet } from "react-router-dom"
import NavContainer from "../../Components/NavContainer/NavContainer"
import Footer from "../../Components/Footer/Footer"

const Layout = () => {
    return (
        <div>
            <NavContainer/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout