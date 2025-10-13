import { createBrowserRouter } from "react-router-dom";
import App from './App';
import MedicineApp from "./components/Crud/MedicineApp";
import Register from "./components/auth/register";
import Login from "./components/auth/Login";

const router = createBrowserRouter([
    {path:'/',element:<App/>},
    {path:'/medicine',element:<MedicineApp/>},
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>}
]);

export default router;