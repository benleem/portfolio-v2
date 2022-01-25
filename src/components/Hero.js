import { Typewriter } from 'react-simple-typewriter';
import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <h1>Ben Marshall</h1>
            <div className='hero-text-container'>
            <h3>
                <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h3>
            </div>
            <img src="./img/waves.svg" alt="" />
        </section>
    );
};

export default Hero;
