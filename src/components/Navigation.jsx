import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navigation;