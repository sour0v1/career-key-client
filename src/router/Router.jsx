import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../home/Home";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])

export default router;