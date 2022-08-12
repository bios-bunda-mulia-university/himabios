import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTiktok, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FC } from "react"
import Logo from "./logo"

const Footer: FC = () => {
    const imgPath = "https://bios-space.sfo3.digitaloceanspaces.com/logo-bios.png"

    return (
        <footer className="bg-gradient-to-br from-white/38 to-white/08 backdrop-blur-5 drop-shadow-custom px-20 py-16 space-y-6">
            <Logo imgUrl={imgPath} text="BIOS" sizeHeight={50} sizeWidth={50} />
            <p className="text-neutral-800 font-inter font-normal text-md">BIOS adalah organisasi himpunan<br /> mahasiswa Universitas Bunda Mulia.</p>
            <div className="space-x-5">
                <a href="https://instagram.com/bios_ubm" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} color="#404040" size="lg" className="hover:cursor-pointer" />
                </a>
                <a href="https://tiktok.com/@bios_ubm" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} color="#404040" size="lg" className="hover:cursor-pointer" />
                </a>
                <a href="https://github.com/bios-bunda-mulia-university" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#404040" size="lg" className="hover:cursor-pointer" />
                </a>
                <a href="mailto:himaitubm@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} color="#404040" size="lg" className="hover:cursor-pointer" />
                </a>
            </div>
            <p className="font-inter font-thin text-neutral-500 text-sm">Copyright &copy; 2022 BIOS. All rights reserved.</p>
        </footer>
    )
}

export default Footer