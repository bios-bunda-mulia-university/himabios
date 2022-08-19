import { FC } from "react"

const WhyBios: FC = () => {
	return (
		<div className="flex flex-row items-center justify-between text-black max-w-5xl mx-auto gap-5 z-10">
			<article className="space-y-8 z-10">
				<h2 className="text-neutral-900 dark:text-neutral-100 text-4xl font-bold font-inter z-10">
					Kenapa sih harus pakai <span className="text-transparent bg-clip-text bg-gradient-to-br from-carribeangreen dark:from-primary-dark-main to-turquoise dark:to-aquamarine">BIOS</span>?
				</h2>
				<div className="font-inter z-10 text-neutral-900 dark:text-neutral-200">Apakah kamu mengalami gejala seperti berikut?</div>
				<ol className="font-inter z-10 text-neutral-900 dark:text-neutral-200">
					<li>✅ Materi kampus susah dimengerti?</li>
					<li>✅ Pengen belajar dengan pengalaman baru?</li>
					<li>✅ Mau belajar secara gratis tapi ilmunya gak nanggung-nanggung?</li>
				</ol>
			</article>
			<figure className="z-10 bg-red-500">
				<img src="https://dummyimage.com/200x300/000/fff&text=Image" alt="" />
			</figure>
		</div>
	)
}

export default WhyBios
