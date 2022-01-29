import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './header.css'

const Header = ({ location }) => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        window.onresize = () => {
            let width = window.innerWidth;
            if (width > 600) {
                setActive(true);
            }
        }
    }, [])

    return (
        <div className={active ? 'header' : 'header active'} style={location === '/' ? {backgroundColor:'rgb(18,15,17)'} : {backgroundColor:'#41007A'}}>
            <div className="mobile-header">
                <motion.div
                whileHover={{scale:1.1}}
                transition={{duration:0.25}}
                >
                    <Link className="logo" onClick={() =>{setActive(true)}} to="/">BM</Link>
                </motion.div>
                <motion.div
                initial={{rotate:'0deg'}}
                animate={active === false ? {rotate:'45deg'} : null}
                >
                    <button className={active ? 'nav-toggle' : 'nav-toggle active' } onClick={()=>{setActive(!active)}}><img src="./img/toggle.svg" alt="" /></button>
                </motion.div>
            </div>
            <div className={active ? 'nav-list active': 'nav-list'}>
                <Link className="nav home" onClick={()=>{setActive(!active)}} style={location === '/' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/">Home</Link>
                <Link className="nav projects" onClick={()=>{setActive(!active)}} style={location === '/projects' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/projects">Projects</Link>
                <Link className="nav contact" onClick={()=>{setActive(!active)}} style={location === '/contact' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;
