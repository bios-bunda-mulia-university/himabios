export type NavTypes = {
    label: string
    subLabel?: string,
    children?: Array<NavTypes>
    href?: string
}