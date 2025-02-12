import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import LoginNavbar from "../shared/LoginNavbar";

const MainLayoutLogin = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <LoginNavbar></LoginNavbar>
            <Outlet></Outlet>
        </div>
    )
}
export default MainLayoutLogin;