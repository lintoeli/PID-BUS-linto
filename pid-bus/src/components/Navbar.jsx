import React from 'react'
import './Navbar.css';
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, DrawerHeader, DrawerFooter } from '@chakra-ui/react'


export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} id='menuButton' colorScheme='white' variant='outline' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu Principal</DrawerHeader>

                    <DrawerBody>
                        <h2> En que consiste</h2>
                    </DrawerBody>

                    <DrawerBody>
                        <h2> Como funciona</h2>
                    </DrawerBody>

                    <DrawerBody>
                        <h2> Quienes somos</h2>
                    </DrawerBody>

                    <DrawerBody>
                        <h2> Quiero probarlo</h2>
                    </DrawerBody>

                    
                </DrawerContent>
            </Drawer>
        </>
    )
}
