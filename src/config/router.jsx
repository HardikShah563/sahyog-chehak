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
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import Partners from "../pages/Partners";

// what we do pages
import Sangharsh from "../pages/Sangharsh";
import Roshan from "../pages/Roshan";
import SAM from "../pages/SAM";
import Umang from "../pages/Umang";

// get involved
import Finances from "../pages/Finances";
import Join from "../pages/Join";
import StoriesOfChange from "../pages/StoriesOfChange";
import Partner from "../pages/Partner";

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
                element: <SAM />
            }, {
                path: "/sahyog-umang",
                element: <Umang />
            }, {
                path: "/about-us",
                element: <AboutUs />
            }, {
                path: "/team",
                element: <Team />
            }, {
                path: "/partners&supporters",
                element: <Partners />
            }, {
                path: "/finances",
                element: <Finances />
            }, {
                path: "/join-us",
                element: <Join />
            }, {
                path: "/stories-of-change",
                element: <StoriesOfChange />
            }, {
                path: "/partner-with-us",
                element: <Partner />
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