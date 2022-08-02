import { faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

const Hero: FC = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen space-y-14">
            <h1 className="text-neutral-900 font-inter font-bold text-6xl z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-carribean-green to-turquoise">Kesulitan</span> Memahami Materi?
            </h1>
            <p className="text-black font-inter font-medium text-xl">
                Merasakan hal yang sama seperti mereka?
                <br />
                Yuk klik tombol dibawah ini untuk memulai
            </p>
            <button className="bg-gradient-to-br from-pastel-green to-turquoise z-10 font-inter font-semibold text-xl space-x-4 p-5 rounded-lg">
                <FontAwesomeIcon icon={faRocket} className="space-x-4" /><span>Ayo Mulai Sekarang</span>
            </button>
        </main>
    )
}

export default Hero