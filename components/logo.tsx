import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {
	imgUrl: string
	text: string
	sizeWidth: number
	sizeHeight: number
}

const Logo: FC<Props> = ({ imgUrl, text, sizeWidth, sizeHeight }) => {
	return (
		<Link href='/'>
			<a className='flex flex-row justify-start space-x-5 align-middle'>
				<Image src={imgUrl} width={sizeWidth} height={sizeHeight} alt='BIOS Logo' priority />
				<span className='flex font-inter font-bold text-3xl items-center text-black dark:text-neutral-50'>{text}</span>
			</a>
		</Link>
	)
}

export default Logo
