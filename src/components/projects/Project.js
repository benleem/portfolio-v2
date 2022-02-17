import { Link } from 'react-router-dom';
import './project.css';

const Project = ({ name, siteUrl, githubUrl }) => {
    return (
        <div className="project">
            <div className='project-card'>
                <img src="./img/placeholder.jpeg" alt="project" />
                <div className='centered-items'>
                    <p>{name}</p>
                    <a href={siteUrl} target='_blank' rel="noreferrer">
                        <button className='live-site'>Live Site</button> 
                    </a>
                    <a href={githubUrl} target='_blank' rel="noreferrer">
                        <button className='github'>GitHub</button> 
                    </a>
                </div> 
            </div>
        </div>
    );
};

export default Project;
