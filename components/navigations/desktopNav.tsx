import { FC } from "react"
import {
    Box,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react"
import { NAV_ITEMS } from "./navItemList"
import DesktopSubNav from "./desktopSubNav"

const DesktopNav: FC = () => {
    const linkColor = useColorModeValue('black', 'white')
    const linkHoverColor = useColorModeValue('green.400', 'gray.400')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'xl'}
                                fontWeight={400}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

export default DesktopNav