import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/Singin/Signin";
import MainLayoutLogin from "../layout/MainLayoutLogin";
import CrimePostForm from "../components/CrimePostForm";
import Analytics from "../components/Analytics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Signin></Signin>,
      },
      {
        path: "/postcrimereport",
        element: <CrimePostForm></CrimePostForm>
      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>
      },
    ],
  },
  {
    path: "/successlogin",
    element: <MainLayoutLogin></MainLayoutLogin>,
    children: [
      {
        path: "/successlogin",
        element: <Home></Home>,
      },
      
    ],
  },
]);
export default router;
