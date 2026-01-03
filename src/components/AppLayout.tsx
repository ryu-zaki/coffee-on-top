import { Outlet } from "react-router"
import NavigationBar from "./NavigationBar";

const AppLayout = () => {

    return (
        <>
        <div className="px-2 text-brown-dark container mx-auto">
          <NavigationBar />
          <Outlet />
          
        </div>
         
        </>
    )
}

export default AppLayout;