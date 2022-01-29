import './skills.css'

const Skills = () => {
    return (
        <div className="skills">
            <div className='col1'>
                <div className='skills-text'>
                    <h1 className='skills-title'>Skills</h1>
                    <p style={{color:'#dc4a25'}}>HTML</p>
                    <p style={{color:'#0365b7'}}>CSS</p>
                    <p style={{color:'#ebd41b'}}>JavaScript</p>
                    <p style={{color:'#5bcfed'}}>React</p>
                    <p style={{color:'#e44c31'}}>Git</p>

                </div>
                <div className='tools-text'>
                    <h1 className='tools-title'>Tools</h1>
                    <p style={{color:'#24a3e5'}}>Visual Studio Code</p>
                    <p style={{color:'#e173f1'}}>Affinity Photo</p>
                </div>
            </div>
            <div className='col2'>
                <h1>Favorite Libraries</h1>
                <p style={{color:'#009ef4'}}>React Three Fiber (three.js)</p>
                <p style={{color:'#e100d7'}}>Framer Motion</p>
                <p style={{color:'#e84849'}}>React Router Dom</p>
            </div>
        </div>
    );
};

export default Skills;
