import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import styled from "@emotion/styled";

const Footer: React.FC = () => {
  const Footer = styled(Box)`
    position: auto;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(100%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  const size = "2rem";
  const link = [
    {
      icon: <BsGithub style={{ fontSize: size }} />,
      url: "https://github.com/bellapd",
    },
    {
      icon: <BsLinkedin style={{ fontSize: size }} />,
      url: "https://www.linkedin.com/in/annabellapd/",
    },
    {
      icon: <AiTwotoneMail style={{ fontSize: size }} />,
      url: "mailto:annabellaputridirgo@gmail.com",
    },
  ];
  return (
    <Footer
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex as="p" mt={2}>
          Annabella Putri Dirgo © {new Date().getFullYear()}
        </Flex>
        <Stack direction={"row"} spacing={6}>
          {/* <Flex maxW="container.md"> */}
          {link.map((item, index) => (
            <Link
              key={index}
              as="a"
              px={4}
              py={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: "gray.500",
              }}
            >
              <NextLink href={item.url} passHref={true}>
                {item.icon}
              </NextLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Footer>
  );
};
export default Footer;
