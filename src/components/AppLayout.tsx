import { Outlet } from "react-router"
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const AppLayout = () => {

    return (
        <>
        
        <div className="text-brown-dark mx-auto">
          <NavigationBar />
          <Outlet />
          <Footer />
        </div>
         
        </>
    )
}

export default AppLayout;