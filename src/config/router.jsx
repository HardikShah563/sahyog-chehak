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
import Team from "../pages/Team";
import Photos from "../pages/Photos";
import Partners from "../pages/Partners";
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
                path: "/team",
                element: <Team />
            }, {
                path: "/photos",
                element: <Photos />
            }, {
                path: "/partners&supporters",
                element: <Partners />
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