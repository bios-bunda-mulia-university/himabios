import { FC, useEffect } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"

const ParticlesBackground: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        const particlesInit = async (main: any) => {
            console.log(main)
            await loadFull(main)
        }
    }, [])

    useEffect(() => {
        const particlesLoaded = (container: any) => {
            console.log(container)
        }
    }, [])

    const particlesInit = async (main: any) => {
        console.log(main)
        await loadFull(main)
    }

    const particlesLoaded = (container: any) => {
        console.log(container)
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            // color={useColorModeValue('black', 'white')}
            options={{
                // background: {
                //     color: {
                //         value: "#151019"
                //     },
                // },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 5,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: colorMode === 'light' ? "#333333" : "#88C8FF",
                    },
                    links: {
                        color: colorMode === 'light' ? "#333333" : "#88C8FF",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticlesBackground