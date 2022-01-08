import Profile from "./Profile";
import { Link } from "react-router-dom";
const Navbar = () =>{
        return (
            <nav className="navbar">
            <h1>The Car Rental</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/">Resrvation History</Link>
            <Link to="/">Sign Out</Link>
                
            </div>
        </nav>
          );
    }
export default Navbar;