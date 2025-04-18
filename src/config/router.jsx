// importing router
import { createBrowserRouter } from "react-router-dom";

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
import Umang from "../pages/Umang";
import Jhula from "../pages/Jhula";

// get involved
import Finances from "../pages/Finances";
import Join from "../pages/Join";
import StoriesOfChange from "../pages/StoriesOfChange";
import Partner from "../pages/Partner";
import NewsCoverage from "../pages/NewsCoverage";

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
                element: <Jhula />
            }, {
                path: "/sahyog-sangharsh",
                element: <Sangharsh />
            }, {
                path: "/sahyog-roshan",
                element: <Roshan />
            }, {
                path: "/sahyog-umang",
                element: <Umang />
            }, {
                path: "/our-story",
                element: <AboutUs />
            }, {
                path: "/team",
                element: <Team />
            }, {
                path: "/partners&supporters",
                element: <Partners />
            }, {
                path: "/reports",
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
                path: "/news-coverage",
                element: <NewsCoverage />
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