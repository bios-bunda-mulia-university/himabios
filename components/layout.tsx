import { FC } from "react"
import Footer from "./footer/footer"
import Header from "./header"

type Props = {
    children: React.ReactNode
} 

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="bg-neutral-100 dark:bg-woodsmoke">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout