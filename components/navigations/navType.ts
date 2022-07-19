export type NavItem = {
    label: string
    subLabel?: string,
    children?: Array<NavItem>
    href?: string
}