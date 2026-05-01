import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";

const Layout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <Navigation />
            <Outlet />
        </div>      
    )
};

export default Layout;