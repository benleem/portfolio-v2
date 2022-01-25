import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = ({ location }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.onresize = () => {
            let width = window.innerWidth;
            if (width > 400) {
                setActive(true);
            }
        }
    }, [])

    return (
        <div className={active ? 'header' : 'header active'} style={location.pathname === '/' ? {backgroundColor:'none'} : null}>
            <div className="mobile-header">
                <Link className="logo" onClick={() =>{setActive(true)}} to="/">BM</Link>
                <button className={active ? 'nav-toggle' : 'nav-toggle active' } onClick={()=>{setActive(!active)}}><img src="./img/toggle.svg" alt="" /></button>
            </div>
            <div className={active ? 'nav-list active': 'nav-list'}>
                <Link className="nav home" onClick={()=>{setActive(!active)}} style={location === '/' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/">Home</Link>
                <Link className="nav about" onClick={()=>{setActive(!active)}} style={location === '/about' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/about">About</Link>
                <Link className="nav projects" onClick={()=>{setActive(!active)}} style={location === '/projects' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/projects">Projects</Link>
                <Link className="nav contact" onClick={()=>{setActive(!active)}} style={location === '/contact' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;
