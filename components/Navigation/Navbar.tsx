import { Center, Flex, Box, useBreakpointValue, Image } from "@chakra-ui/react";
import Navlink from "./Navlink";
import Dropdown from "./Dropdown";
import Link from "next/link";

export default function Navigation(): JSX.Element {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Flex mt="0.5 rem" as="nav">
      <Box ml="auto">
        {" "}
        {isDesktop ? (
          <>
            <Navlink href="/">Home</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/posts">Posts</Navlink>
            <Navlink href="/portfolio">Portfolio</Navlink>
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
