import { Flex, Box, useBreakpointValue, Icon } from "@chakra-ui/react";
import Navlink from "./Navlink";
import Dropdown from "./Dropdown";
import { RiHome4Fill } from "react-icons/ri";
import { BsPersonLinesFill, BsFillFilePostFill } from "react-icons/bs";
import { SiApostrophe } from "react-icons/si";

export default function Navigation(): JSX.Element {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Flex mt="0.5 rem" as="nav">
      <Box ml="auto">
        {" "}
        {isDesktop ? (
          <>
            <Navlink href="/">
              <Icon as={RiHome4Fill}></Icon>Home
            </Navlink>
            <Navlink href="/about">
              <Icon as={BsPersonLinesFill}></Icon>About
            </Navlink>
            <Navlink href="/posts">
              <Icon as={BsFillFilePostFill}></Icon>Posts
            </Navlink>
            <Navlink href="/portfolio">
              <Icon as={SiApostrophe}></Icon>Portfolio
            </Navlink>
          </>
        ) : (
          <>
            <Dropdown />
          </>
        )}
      </Box>
    </Flex>
  );
}
