import { Link } from 'react-router-dom';

import './project.css';

const Project = ({ name, path }) => {
    return (
        <div className="project">
            <div className='project-card'>
                <img src="./img/placeholder.jpeg" alt="project" />
                <div className='centered-items'>
                    <p>{name}</p>
                    <Link to={path}>
                        <button className='live-site'>Live Site</button>
                    </Link>
                    <a href="" target='_blank'>
                        <button className='github'>GitHub</button> 
                    </a>
                </div> 
            </div>
        </div>
    );
};

export default Project;
