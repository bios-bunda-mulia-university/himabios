import { FC, useCallback, useMemo } from "react"
import type { Engine, ISourceOptions, Container } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"

type Props = {
    id: string
}

const Stars: FC<Props> = ({ id }) => {
    const options: ISourceOptions = useMemo(() => {
        return {
            particles: {
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 0.1,
                    straight: false,
                },
                color: {
                    value: "#FFFFFF",
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                    },
                    value: { min: 0, max: 1 },
                },
                size: {
                    value: { min: 1, max: 3 },
                }
            }
        }
    }, [])

    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        await loadFull(engine)
    }, [])

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

export default Stars