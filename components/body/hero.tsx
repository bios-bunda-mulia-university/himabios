import { faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

const Hero: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-14">
			<h1 className="text-neutral-900 dark:text-neutral-100 font-inter font-bold text-6xl z-10">
				<span className="text-transparent bg-clip-text bg-gradient-to-br from-carribeangreen dark:from-primary-dark-main to-turquoise dark:to-aquamarine">Kesulitan</span> Memahami Materi?
			</h1>
			<p className="text-black dark:text-neutral-200 font-inter font-medium text-xl">
				Merasakan hal yang sama seperti mereka?
				<br />
				Yuk klik tombol dibawah ini untuk memulai
			</p>
			<button className="bg-gradient-to-br hover:-translate-y-2 transition-all duration-200 ease-in-out from-pastelgreen dark:from-primary-dark-main to-turquoise dark:to-aquamarine z-10 font-inter font-semibold text-xl space-x-4 p-5 rounded-lg">
				<FontAwesomeIcon icon={faRocket} className="space-x-4 text-neutral-100 dark:text-neutral-900" />
				<span className="text-neutral-100 dark:text-neutral-900">Ayo Mulai Sekarang</span>
			</button>
		</div>
	)
}

export default Hero
