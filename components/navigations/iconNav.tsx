import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faSun } from "@fortawesome/free-solid-svg-icons"

const IconNav: FC = () => {
    return (
        <div className="flex flex-row space-x-8 items-center justify-end mx-70 px-2 z-10">
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#404040" size="lg" />
            </button>
            <button>
                <FontAwesomeIcon icon={faSun} color="#404040" size="lg" />
            </button>
        </div>
    )
}

export default IconNav