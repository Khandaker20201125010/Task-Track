import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp') 
    
    return (
        <div>
          {noHeaderFooter || <Navbar></Navbar>}
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;