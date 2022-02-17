import './skills.css'

const Skills = () => {
    const skills = [
        {skill:'HTML', color:'#dc4a25'}, 
        {skill:'CSS', color:'#0365b7'},
        {skill:'JavaScript', color:'#ebd41b'},
        {skill:'React', color:'#5bcfed'},
        {skill:'Git', color:'#e44c31'}
    ];
    const tools = [
        {tool:'Visual Studio Code', color:'#24a3e5'}, 
        {tool:'Affinity Photo', color:'#e173f1'}
    ];
    const libraries = [
        {lib:'React Three Fiber (three.js)', color:'#009ef4'}, 
        {lib:'Framer Motion', color:'#e100d7'}, 
        {lib:'React Router Dom', color:'#e84849'}
    ];

    return (
        <div className="skills">
            <div className='col1'>
                <div className='skills-text'>
                    <h1 className='skills-title'>Skills</h1>
                    {skills.map((skill) => <p className='skill' key={skill.color} style={{color:skill.color}}>{skill.skill}</p>)}
                </div>
                <div className='tools-text'>
                    <h1 className='tools-title'>Tools</h1>
                    {tools.map((tool) => <p className='tool' key={tool.color} style={{color:tool.color}}>{tool.tool}</p>)}
                </div>
            </div>
            <div className='col2'>
                <h1 className='favorites'>Favorite Libraries</h1>
                {libraries.map((library) => <p className='library' key={library.color} style={{color:library.color}}>{library.lib}</p>)}
            </div>
        </div>
    );
};

export default Skills;
