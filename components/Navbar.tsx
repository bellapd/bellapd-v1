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
      <Flex maxW="container.md" align="center" mx="auto">
        <Flex marginLeft="auto">
          {isMobile ? (
            <Dropdown />
          ) : (
            <Flex display={{ base: "none", md: "flex" }}>
              <Navlink href="/">
                <strong>01 </strong> Home
              </Navlink>
              <Navlink href="/about">
                <strong>02 </strong> About
              </Navlink>
              <Navlink href="/blog">
                <strong>03 </strong> Blog
              </Navlink>
              <Navlink href="/portfolio">
                <strong>04 </strong> Portfolio
              </Navlink>
            </Flex>
          )}
        </Flex>
        <Switch />
      </Flex>
    </Box>
  );
}
