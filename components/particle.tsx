import { FC, useCallback, useEffect, useMemo } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useColorMode } from "@chakra-ui/react"
import type { Engine } from "tsparticles-engine"
import { ISourceOptions, Container } from "tsparticles-engine"

type Props = {
    id: string
}

const ParticlesBackground: FC<Props> = ({ id }) => {
    const { colorMode } = useColorMode()

    const options: ISourceOptions = useMemo(() => {
        return {
            fpsLimit: 120,
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
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: colorMode === "light" ? "#1F8843" : "#43E97B",
                },
                links: {
                    color: colorMode === "light" ? "#1F8843" : "#43E97B",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "bounce",
                    random: false,
                    speed: 3,
                    straight: false,
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
                    random: true,
                    value: {
                        min: 1,
                        max: 5,
                    },
                },
                detectRetina: false,
            },
        }
    }, [colorMode])

    // init particles engine
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    // loaded particles engine
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container)
    }, [])

    return (
        <Particles
            id={id}
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    )
}

export default ParticlesBackground