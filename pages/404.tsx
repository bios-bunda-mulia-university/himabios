import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Stars from "../components/particles/stars";

const NotFound = () => {
    const imgUrl = "https://bios-space.sfo3.digitaloceanspaces.com/404%203d.svg"

    return (
        <div className="flex flex-col items-center justify-center bg-black h-screen w-screen">
            <Image src={imgUrl} alt="404 Illustration" width={500} height={500} className="z-10" />
            <h1 className="text-neutral-50 font-inter font-bold text-5xl">Oopss.. Halaman Tidak Ditemukan</h1>
            <Link href="/">
                
                <a className="bg-primary-light-main p-4 font-inter font-normal text-base mt-10 tracking-wider text-neutral-50 rounded-md z-10">
                    Kembali ke halaman utama
                </a>
            </Link>
            <Stars id="tsparticles" />
        </div>
    )
}

NotFound.getLayout = function getLayout(page: ReactElement) {
    return <>{page}</>
}

export default NotFound