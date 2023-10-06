import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import GalleryComp from "../Pages/Gallery/Gallery";
import TeamCmp from "../Pages/Team/Team";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/gallery",
                element: <GalleryComp></GalleryComp>
            },

            {
                path: "/team",
                element: <TeamCmp></TeamCmp>
            },

            {
                path: "/registration",
                element: <Registration></Registration>
            },

            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])

export default router;