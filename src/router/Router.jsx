import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../home/Home";
import Login from "../form/login/Login";
import SignUp from "../form/signup/SignUp";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            
        ]
    }
])

export default router;