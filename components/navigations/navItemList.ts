import { NavItem } from "./navType";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '#'
    },
    {
        label: 'About',
        href: '#'
    },
    {
        label: 'Blog',
        href: '#'
    },
    {
        label: 'Showcase',
        href: '#'
    },
    {
        label: 'More',
        children: [
            {
                label: 'Glossary',
                subLabel: 'Kamus dan definisi',
                href: '#'
            }
        ]
    }
]