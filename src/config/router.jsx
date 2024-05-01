import { createBrowserRouter } from "react-router-dom";
// importing components
import Navbar from "../components/Navbar";
// importing pages
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Impact from "../pages/Impact";
import Donate from "../pages/Donate";
import Error from "../pages/Error";
// what are we pages
// import Team from "../pages/Team";

// what we do pages
import Sangharsh from "../pages/Sangharsh";
import Roshan from "../pages/Roshan";

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
            }, {
                path: "/sahyog-jhula",
                element: <Sangharsh />
            }, {
                path: "/sahyog-sangharsh",
                element: <Sangharsh />
            }, {
                path: "/sahyog-roshan",
                element: <Roshan />
            }, {
                path: "/sahyog-scholarship-and-mentorship-program",
                element: <Sangharsh />
            }, {
                path: "/sahyog-jhula",
                element: <Sangharsh />
            }, {
                // your pages will go here, copy the syntax of <Home /> and follow the convention
            }, {
                path: "/*",
                element: <Error />
            }
        ],
    }
]);

export default router;