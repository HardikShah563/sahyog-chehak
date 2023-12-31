import { createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
// importing pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }, 
            {
                // your pages will go here, copy the syntax of <Home /> and follow the convention
            }
        ],
    }
]);

export default router;