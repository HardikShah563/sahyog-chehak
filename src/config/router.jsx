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
import AboutUs from "../pages/AboutUs";
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
                path: "/sahyog-mentorship-and-skill-building",
                element: <Sangharsh />
            }, {
                path: "/sahyog-umang",
                element: <Sangharsh />
            }, {
                path: "/about-us",
                element: <AboutUs />
            }, {
                path: "",
                element: ""
            }, {
                path: "",
                element: ""
            }, {
                path: "",
                element: ""
            }, {
                path: "",
                element: ""
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