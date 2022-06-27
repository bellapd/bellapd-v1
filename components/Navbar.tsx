import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Navlink from "./Navlink";
import Switch from "./Switch";
import Dropdown from "./Dropdown";

export default function Navigation(): JSX.Element {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      width="100%"
      as="nav"
    >
      <Flex py={2} px={5} maxW="container.sm" align="center" mx="auto">
        <Flex marginRight="auto">
          {isMobile ? (
            <Dropdown />
          ) : (
            <Flex display={{ base: "none", md: "flex" }}>
              <Navlink href="/">Home</Navlink>
              <Navlink href="/about">About</Navlink>
              <Navlink href="/blog">Blog</Navlink>
              <Navlink href="/portfolio">Portfolio</Navlink>
            </Flex>
          )}
        </Flex>
        <Switch />
      </Flex>
    </Box>
  );
}
