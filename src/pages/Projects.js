import TopBanner from "../components/projects/TopBanner";
import Project from "../components/projects/Project";

const Projects = () => {
    const recipe = {
        name: 'Recipe Hut',
        siteUrl:'/',
        githubUrl:'https://github.com/benleem/recipe-hut'
    }
    const earth = {
        name: 'Google Earth Clone',
        siteUrl:'/',
        githubUrl:'https://github.com/benleem/threejs-test'    
    }
    const crypto = {
        name: 'Crypto Snapshot',
        siteUrl:'/',
        githubUrl:'https://github.com/benleem/crypto_snapshot/tree/main/cryptosnapshot'    
    }
    const portfolio = {
        name: 'Portfolio',
        siteUrl:'/',
        githubUrl:'https://github.com/benleem/portfolio-v2'    
    }

    return (
        <div className="Projects">
            <TopBanner title='My Projects'/>
            <div className='projects-container'>
                <Project name={recipe.name} siteUrl={recipe.siteUrl} githubUrl={recipe.githubUrl}/>
                <Project name={earth.name} siteUrl={earth.siteUrl} githubUrl={earth.githubUrl}/>
                <Project name={crypto.name} siteUrl={crypto.siteUrl} githubUrl={crypto.githubUrl}/>
                <Project name={portfolio.name} siteUrl={portfolio.siteUrl} githubUrl={portfolio.githubUrl}/>
            </div>
        </div>
    );
};

export default Projects;
