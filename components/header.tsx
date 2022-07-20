import { FC, ReactNode } from "react"
import Image from "next/image"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Link,
    useColorMode,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure
} from "@chakra-ui/react"

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"

import "../styles/Home.module.css"
import DesktopNav from "./navigations/desktopNav"
import ParticlesBackground from "./particle"

const Header: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('transparent', 'transparent')}
                color={useColorModeValue('black', 'white')}
                minH={'60px'}
                py={{ base: 4, md: 6 }}
                px={{ base: 4 }}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                >
                    <Stack direction='row' spacing={5}>
                        <Image
                            src="https://bios-space.sfo3.digitaloceanspaces.com/logo-bios.png"
                            alt="BIOS Logo"
                            width={55}
                            height={50}
                        />
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('black', 'white')}
                            fontSize='4xl'
                            fontWeight={600}
                        >
                            BIOS
                        </Text>
                    </Stack>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={100} alignItems={'center'}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'flex-end'}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
            <ParticlesBackground />
        </Box>
    )
}

export default Header