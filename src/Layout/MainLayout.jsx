import { Outlet } from "react-router-dom";
import Navbar from "../Componants/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="max-w-screen-xl mx-auto">
           <Outlet></Outlet> 
           </div>
        </div>
    );
};

export default MainLayout;