import { Link} from "react-router-dom";
import { motion } from "framer-motion";
import './header.css'

const Header = ({ location }) => {
    return (
        <div className='header-container' style={location === '/' ? {backgroundColor:'rgb(18,15,17)'} : {backgroundColor:'#41007A'}}>
            <div className="header">
                <div className="mobile-header">
                    <motion.div
                    whileHover={{scale:1.1}}
                    transition={{duration:0.25}}
                    >
                        <Link className="logo" to="/">BM</Link>
                    </motion.div>
                </div>
                <div className='nav-list'>
                    <Link className="nav home" style={location === '/' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/">Home</Link>
                    <Link className="nav projects" style={location === '/projects' ? {boxShadow: '0 4px 0px -2px white'} : null} to="/projects">Projects</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;