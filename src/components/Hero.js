import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from './ParticleBackground';
import './hero.css'

const Hero = () => {
    const value ='<Ben Marshall/>'

    return (
        <section className="hero">
            <h1>{value}</h1>
            <div className='hero-text-container'>
                <h3>
                    <Typewriter
                        words={['Eat', 'Sleep', 'Code', 'Repeat']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>
            </div>
            <img className='waves' src="./img/waves.svg" alt="" />
            <ParticleBackground/>
        </section>
    );
};

export default Hero;
