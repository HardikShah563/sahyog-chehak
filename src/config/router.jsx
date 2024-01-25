import { createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
// importing pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Impact from "../pages/Impact";
import Donate from "../pages/Donate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/impact",
                element: <Impact />
            }, {
                path: "/donate",
                element: <Donate />
            },
            {
                // your pages will go here, copy the syntax of <Home /> and follow the convention
            }
        ],
    }
]);

export default router;