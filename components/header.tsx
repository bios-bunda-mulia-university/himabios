import { FC } from "react"
import Logo from "./logo"
import MenuDesktopView from "./navigations/menuDesktopView"
import IconNav from "./navigations/iconNav"

const Header: FC = () => {
    const imgPath = "https://bios-space.sfo3.digitaloceanspaces.com/logo-bios.png"

    return (
        <nav className="sticky top-0 flex flex-row px-12 py-5 bg-gradient-to-br from-white/38 dark:from-raisinblack/38 to-white/08 dark:to-white/08 z-20 backdrop-blur-5 drop-shadow-custom">
            <Logo imgUrl={imgPath} text="BIOS" sizeHeight={50} sizeWidth={50} />
            <MenuDesktopView />
            <IconNav />
        </nav>

    )
}

export default Header