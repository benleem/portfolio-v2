import Header from './Header';
import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            {/* <img style={{width:'100vw'}} src="./img/home-background.jpg" alt="" /> */}
            <h1>Ben Marshall</h1>
            <h3>A web developer who specializes in utilizing APIs in the front-end</h3>
            <img src="./img/waves.svg" alt="" />
        </section>
    );
};

export default Hero;
