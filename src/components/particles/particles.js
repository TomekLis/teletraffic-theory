import React from 'react';
import Particles from 'react-particles-js';

class ParticlesComponent extends React.Component {

    render() {
        return (
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 276,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        },

                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        }
                    }
                }}
                style={{
                    width: '100%',
                    background: "black"
                }}
            />
        );
    };
}

export default ParticlesComponent