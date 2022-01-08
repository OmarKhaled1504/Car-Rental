import { Link } from "react-router-dom";
const NavbarUser = () =>{
        return (
            <nav className="navbar">
            <h1>The Car Rental</h1>
            <div className="links">
            <Link to="/user">Home</Link>
            <Link to="/user/ResHistory">Resrvation History</Link>
            <Link to="/">Sign Out</Link>
                
            </div>
        </nav>
          );
    }
export default NavbarUser;