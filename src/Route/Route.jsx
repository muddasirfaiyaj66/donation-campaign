import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Sector from "../Pages/Sector/Sector";





const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/data.json')

            }, 
            {
                path:"/donation",
                element: <Donation></Donation>
            },
            {
                path:"/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/categoryData/:id",
                element: <Sector></Sector>,
                loader:() =>  fetch('/data.json')
            }, 
        ]
    }
])
export default myCreateRoute;