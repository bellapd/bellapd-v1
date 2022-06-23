import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Navlink from "./Navlink";
import Link from "next/link";
import styled from "@emotion/styled";
import Switch from "./Switch";
import { HamburgerIcon } from "@chakra-ui/icons";
import { generateKey } from "crypto";

export default function Navigation(): JSX.Element {
  const Navbar = styled(Box)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(100%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <Navbar
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      width="100%"
      as="nav"
    >
      <Flex py={2} px={5} maxW="container.sm" align="center" mx="auto">
        <Flex marginRight="auto">
          <Flex display={{ base: "none", md: "flex" }}>
            <Navlink href="/">Home</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/blog">Blog</Navlink>
            <Navlink href="/portfolio">Portfolio</Navlink>
          </Flex>
          {/* <Accent /> */}
          <Menu>
            <MenuButton
              // show menu only when container is smaller than 768px
              display={{ base: "none", md: "none", sm: "flex" }}
              as={IconButton}
              icon={<HamburgerIcon />}
              variant={"link"}
            />
            <MenuList alignItems={"center"}>
              <MenuItem>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/blog">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/portfolio">Portfolio</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Switch />
      </Flex>
    </Navbar>
  );
}
