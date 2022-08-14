import { FC, useCallback, useMemo, useState } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine, ISourceOptions, Container } from "tsparticles-engine"

type Props = {
    id: string
}

const Line: FC<Props> = ({ id }) => {
    const [theme, setTheme] = useState('light')

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
                    value: theme === 'dark' ? "#21743D" : "#0F4421",
                },
                links: {
                    color: theme === 'dark' ? "#43E97B" : "#1F8843",
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
                    type: "circle",
                },
                size: {
                    random: true,
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: false,
        }
    }, [theme])

    // init particles engine
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    // loaded particles engine
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container)
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

export default Line