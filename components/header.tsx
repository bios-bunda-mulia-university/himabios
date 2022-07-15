import React, { FC } from "react"
import Image from "next/image"

import { config } from "@fortawesome/fontawesome-svg-core"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "../styles/Home.module.css"

config.autoAddCss = false

type Props = {
}

const Header: FC<Props> = ({ }) => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                {/* START: Brand section */}
                <div className="flex items-center justify-between">
                    <a href="#" className="inline-flex items-center gap-x-3 text-[2rem] font-semibold dark:text-white font-rubik">
                        <Image src="https://bios-space.sfo3.digitaloceanspaces.com/logo-bios.png" alt="BIOS Logo" className="w-10 h-auto" width={50} height={50} />
                        BIOS
                    </a>
                </div>
                {/* END: Brand section */}

                {/* START: Menu section */}
                {/* TODO: Add menu (Ref: https://preline.co/docs/mega-menu.html#slide-up-animation) */}
                <div id="navbar-with-mega-menu" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-start sm:mt-0 sm:pl-5">
                        {/* TODO: Add hover effect for each menu [rounded-square-effect] */}
                        <a href="#" className="font-regular text-[1rem] text-black font-rubik hover:text-gray-600" aria-current="page">Home</a>
                        <a href="#" className="font-regular text-[1rem] text-black font-rubik" aria-current="page">About us</a>
                        <a href="#" className="font-regular text-[1rem] text-black font-rubik" aria-current="page">Blog</a>
                        <a href="#" className="font-regular text-[1rem] text-black font-rubik" aria-current="page">Showcase</a>
                        {/* START: Dropdown */}
                        <div className="hs-mega-menu">
                            <button id="hs-mega-menu-basic-dr" className="font-rubik font-regular text-[1rem] hs-mega-menu-toggle hs-mega-menu-open:text-black hover:hs-mega-menu-open:text-black flex items-center w-full text-black hover:text-gray-600" type="button">
                                More
                                <svg className="ml-2 w-2.5 h-2.5 text-black" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                            </button>

                            <div className="hs-mega-menu-content hs-mega-menu-open:opacity-100 opacity-0 top-full right-0 hidden z-10 rounded-md before:absolute before:-top-5 before:left-0 before:w-full before:h-5 w-full bg-white p-2 sm:w-48 sm:transition-all sm:absolute sm:shadow-md sm:duration-300 dark:bg-gray-800" aria-labelledby="hs-mega-menu-basic-dr">
                                <a href="#" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                    Glossary
                                </a>
                            </div>
                        </div>
                        {/* END: Dropdown */}
                    </div>
                </div>
                {/* END: Menu section */}
            </nav>
        </header>
    )
}

export default Header