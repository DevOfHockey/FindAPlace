import Link from 'next/link'; //fix: defualt export removing curly {}
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout, FcFaq } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="green.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">FindAPlace</Link>
        </Box>
            <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} aria-label="Options" icon={<FcMenu />} variant="outline" />
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link>
                <Link href="/about" passHref>
                    <MenuItem icon={<FcFaq />}>About</MenuItem>
                </Link>
            </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar