import Particles from "react-tsparticles";
import './particle-background.css'

const ParticleBackground = () => {
    return (
        <div className="particle-background">
            <Particles
                options={{
                    fpsLimit: 60,
                    background: {
                        color: "rgb(18,15,17)"
                    },
                    // interactivity: {
                    //     events: {
                    //     onClick: { enable: true, mode: "push" },
                    //     onHover: {
                    //         enable: true,
                    //         mode: "repulse",
                    //         parallax: { enable: false, force: 60, smooth: 10 }
                    //     },
                    //     resize: true
                    //     },
                    //     modes: {
                    //     push: { quantity: 4 },
                    //     repulse: { distance: 200, duration: 0.4 }
                    //     }
                    // },
                    particles: {
                        color: { value: "#41107A" },
                        move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 2,
                        straight: false
                        },
                        number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                        },
                        opacity: {
                        animation: {
                            enable: true,
                            speed: 0.05,
                            sync: true,
                            startValue: "max",
                            count: 1,
                            destroy: "min"
                        },
                        value: {
                            min: 0,
                            max: 1
                        }
                        },
                        shape: {
                        type: "circle"
                        },
                        size: {
                        value: { min: 1, max: 5 }
                        }
                    }
                }}
            />
        </div>
    );
};

export default ParticleBackground;
