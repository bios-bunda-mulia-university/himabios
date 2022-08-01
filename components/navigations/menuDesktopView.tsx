import Link from "next/link"
import { FC } from "react"
import { NAV_ITEMS } from "./itemsList"

const MenuDesktopView: FC = () => {
    return (
        <div className="flex flex-row justify-start items-center px-16">
            {NAV_ITEMS.map((navItem) => (
                <Link key={navItem.label} href={navItem.label}>
                    <a key={navItem.label} className="px-3 font-medium font-inter text-lg text-neutral-600 transition ease-in-out hover:text-primary-light-hover hover:-translate-y-1">
                        {navItem.label}
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default MenuDesktopView