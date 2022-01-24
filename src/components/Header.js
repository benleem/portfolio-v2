import { Link } from "react-router-dom";
import './header.css'

const Header = ({ location }) => {
    return (
        <div className="header">
            <Link to="/"><img src="./img/placeholder.svg" alt="placeholder logo" /></Link>
            <div className="nav-list">
                <Link className="nav-home" style={location === '/' ? {borderBottom:'1px solid white'} : null} to="/">Home</Link>
                <Link className="nav-about" style={location === '/about' ? {borderBottom:'1px solid white'} : null} to="/about">About</Link>
                <Link className="nav-projects" style={location === '/projects' ? {borderBottom:'1px solid white'} : null} to="/projects">Projects</Link>
                <Link className="nav-contact" style={location === '/contact' ? {borderBottom:'1px solid white'} : null} to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;
