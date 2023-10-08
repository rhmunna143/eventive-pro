import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import GalleryComp from "../Pages/Gallery/Gallery";
import TeamCmp from "../Pages/Team/Team";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Details/Details";
import PrivateRoute from "../Hooks/PrivateRoute";
import About from "../Pages/About/About";
import NotFound from "../Pages/Error/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/gallery",
                element: <PrivateRoute><GalleryComp></GalleryComp></PrivateRoute>
            },

            {
                path: "/team",
                element: <PrivateRoute><TeamCmp></TeamCmp></PrivateRoute>
            },

            {
                path: "/about",
                element: <About></About>
            },
            
            {
                path: "/registration",
                element: <Registration></Registration>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/event/details/:id",
                loader: () => fetch("./data.json"),
                element: <PrivateRoute><Details></Details></PrivateRoute>
            }
        ]
    }
])

export default router;