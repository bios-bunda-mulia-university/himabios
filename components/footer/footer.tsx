import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import Logo from "../logo"
import { FOOTER_ITEMS } from "./footerIconLists"

const Footer: FC = () => {
    const imgPath = "https://bios-space.sfo3.digitaloceanspaces.com/logo-bios.png"

    return (
        <footer className="bg-gradient-to-br from-white/38 to-white/08 backdrop-blur-5 drop-shadow-custom px-20 py-16 space-y-6">
            <Logo imgUrl={imgPath} text="BIOS" sizeHeight={50} sizeWidth={50} />
            <p className="text-neutral-800 font-inter font-normal text-md">BIOS adalah organisasi himpunan<br /> mahasiswa Universitas Bunda Mulia.</p>
            <div className="space-x-5">
                {FOOTER_ITEMS.map((footerIcon) => (
                    <a key={footerIcon.href} href={footerIcon.href} target={footerIcon.target} rel={footerIcon.rel}>
                        <FontAwesomeIcon icon={footerIcon.icon} color="#404040" size="lg" className="hover:cursor-pointer" />
                    </a>
                ))}
            </div>
            <p className="font-inter font-thin text-neutral-500 text-sm">Copyright &copy; 2022 BIOS. All rights reserved.</p>
        </footer>
    )
}

export default Footer