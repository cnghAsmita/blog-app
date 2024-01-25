import { createBrowserRouter } from "react-router-dom";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import Home from "./components/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: 'register',
        element: <RegisterForm />
    },
    {
        path: 'login',
        element: <LoginForm />
    }
])

export default router;