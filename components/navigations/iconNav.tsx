import { ChangeEvent, FC, MouseEventHandler, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const IconNav: FC = () => {
	const [theme, setTheme] = useState("light")

	// Match user system preferences theme
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark")
		} else {
			setTheme("light")
		}
	}, [])

	// Adding class to DOM to change theme
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [theme])

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		<div className='flex flex-row space-x-8 items-center justify-end ml-auto z-10'>
			<button>
				<FontAwesomeIcon icon={faMagnifyingGlass} color={theme === "dark" ? "#E5E5E5" : "#404040"} size='lg' />
			</button>
			<button type='button' onClick={handleThemeSwitch} className='bg-transparent p-3 rounded-lg transition-all duration-200 ease-in'>
				{theme === "dark" ? <FontAwesomeIcon icon={faSun} color='#FACC15' size='lg' /> : <FontAwesomeIcon icon={faMoon} color='#F59E0B' size='lg' />}
			</button>
		</div>
	)
}

export default IconNav
