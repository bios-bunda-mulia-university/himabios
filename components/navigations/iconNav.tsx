import { FC, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const darkModeAtom = atomWithStorage("darkMode", false)

const IconNav: FC = () => {
	const [darkMode, setDarkMode] = useAtom(darkModeAtom)

	// Adding class to DOM to change theme
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [darkMode])

	const handleThemeSwitch = () => {
		setDarkMode(!darkMode)
	}

	return (
		<div className="flex flex-row space-x-8 items-center justify-end ml-auto z-10">
			<button name="search bar">
				<FontAwesomeIcon icon={faMagnifyingGlass} color={darkMode ? "#E5E5E5" : "#404040"} size="lg" />
			</button>
			<button name="toggle dark mode" type="button" onClick={handleThemeSwitch} className="bg-transparent p-3 rounded-lg transition-all duration-200 ease-in">
				<FontAwesomeIcon icon={darkMode ? faSun : faMoon} color={darkMode ? "#FACC15" : "#F59E0B"} size="lg" />
			</button>
		</div>
	)
}

export default IconNav
