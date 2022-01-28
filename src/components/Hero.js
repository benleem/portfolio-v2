import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from './ParticleBackground';
import { motion } from "framer-motion"
import './hero.css'

const Hero = () => {
    const name ='<Ben Marshall/>';

    return (
        <section className="hero">
            <motion.div className='hero-text-container'
            initial={{ x: '-50vw', opacity:0 }}
            animate={{ x:0, opacity:1 }}
            transition={{type: 'spring', duration: 1.7, bounce: .3}}
            >
                <div className='socials'>
                    <a href="https://www.linkedin.com/in/benjamin-marshall-609906196/" target='_blank'><img src="./img/linkdin.png" alt="Linked In" /></a>
                    <a href="https://github.com/benleem" target='_blank'><img src="./img/github.png" alt="Git Hub" /></a>
                    <Link to='/contact'><img src="./img/email.png" alt="contact" /></Link>
                </div>
                <h1>{name}</h1>
                <h3>
                    <Typewriter
                        words={['Web devloper...', 'Problem solver...', 'Tech enthusiast...']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>
            </motion.div>
            <img className='waves' src="./img/waves.svg" alt="" />
            <ParticleBackground/>
        </section>
    );
};

export default Hero;
