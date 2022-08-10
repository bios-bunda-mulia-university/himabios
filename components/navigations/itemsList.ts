import { NavTypes } from "./types";

export const NAV_ITEMS: Array<NavTypes> = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'Showcase',
        href: '/showcase',
    },
    {
        label: 'Glossary',
        href: '/glossary',
    },
    {
        label: 'More',
        children: [
            {
                label: 'Glossary',
                subLabel: 'Kamus dan definisi',
                href: '/glossary',
            },
        ],
    },
]