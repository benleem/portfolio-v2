import TopBanner from "../components/TopBanner";
import Project from "../components/Project";

const Projects = () => {
    const title = 'My Projects';
    const recipe = {
        name: 'Recipe Hut',
        path: '/',
    }
    const earth = {
        name: 'Google Earth Clone',
        path: '/'
    }
    const crypto = {
        name: 'Crypto Snapshot',
        path: '/'
    }
    const portfolio = {
        name: 'Portfolio',
        path: '/'
    }

    return (
        <div className="Projects">
            <TopBanner title={title}/>
            <div className='projects-container'>
                <Project name={recipe.name} path={recipe.path}/>
                <Project name={earth.name} path={earth.path}/>
                <Project name={crypto.name} path={crypto.path}/>
                <Project name={portfolio.name} path={portfolio.path}/>
            </div>
        </div>
    );
};

export default Projects;
