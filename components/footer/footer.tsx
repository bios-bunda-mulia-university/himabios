import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useEffect, useState } from "react"
import Logo from "../logo"
import { FOOTER_ITEMS } from "./footerIconLists"

const Footer: FC = () => {
    const [theme, setTheme] = useState('light')

    const imgPath = "https://bios-space.sfo3.digitaloceanspaces.com/logo-bios.png"

    return (
        <footer className="bg-gradient-to-br from-white/38 dark:from-raisinblack/38 to-white/08 dark:to-raisinblack/08 backdrop-blur-5 drop-shadow-custom">
            <div className="px-20 py-16 space-y-6">
                <Logo imgUrl={imgPath} text="BIOS" sizeHeight={50} sizeWidth={50} />
                <p className="text-neutral-800 dark:text-neutral-300 font-inter font-normal text-md">BIOS adalah organisasi himpunan<br /> mahasiswa Universitas Bunda Mulia.</p>
                <div className="space-x-5">
                    {FOOTER_ITEMS.map((footerIcon) => (
                        <a key={footerIcon.href} href={footerIcon.href} target={footerIcon.target} rel={footerIcon.rel}>
                            <FontAwesomeIcon icon={footerIcon.icon} size="lg" className="hover:cursor-pointer hover:text-neutral-500 text-neutral-700 dark:text-neutral-200 hover:dark:text-neutral-400" />
                        </a>
                    ))}
                </div>
                <p className="font-inter font-thin text-neutral-500 dark:text-neutral-400 text-sm">Copyright &copy; 2022 BIOS. All rights reserved.</p>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank" className="font-inter font-semibold text-base bg-black dark:bg-white text-white dark:text-black py-3 px-5 mb-5 rounded-lg">
                    Deployed by ▲ Vercel
                </a>
            </div>
        </footer>
    )
}

export default Footer