import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTiktok, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FooterTypes } from "./types"

export const FOOTER_ITEMS: FooterTypes[] = [
	{
		href: "https://instagram.com/bios_ubm",
		target: "_blank",
		rel: "noopener noreferrer",
		icon: faInstagram,
	},
	{
		href: "https://tiktok.com/@bios_ubm",
		target: "_blank",
		rel: "noopener noreferrer",
		icon: faTiktok,
	},
	{
		href: "https://github.com/bios-bunda-mulia-university",
		target: "_blank",
		rel: "noopener noreferrer",
		icon: faGithub,
	},
	{
		href: "mailto:himaitubm@gmail.com",
		target: "_blank",
		rel: "noopener noreferrer",
		icon: faEnvelope,
	},
]
