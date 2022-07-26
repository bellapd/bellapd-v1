import { Box, Link, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Navlink from "./Navlink";
import Switch from "./Switch";
import Dropdown from "./Dropdown";
import NextLink from "next/link";

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
        <NextLink href="/" passHref>
          <Link mr={3}>
            <Image
              borderRadius="full"
              boxSize="50px"
              src="/images/avatar.png"
              ml={4}
            />
          </Link>
        </NextLink>
        <Flex marginLeft="auto">
          {isMobile ? (
            <Dropdown />
          ) : (
            <Flex display={{ base: "none", md: "flex" }}>
              <Navlink href="/about">
                <strong>01</strong> About
              </Navlink>
              <Navlink href="/blog">
                <strong>02 </strong> Blog
              </Navlink>
              <Navlink href="/portfolio">
                <strong>03 </strong> Portfolio
              </Navlink>
            </Flex>
          )}
        </Flex>
        <Switch />
      </Flex>
    </Box>
  );
}
