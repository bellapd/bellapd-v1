import { Flex, Link, IconButton } from "@chakra-ui/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Footer(): JSX.Element {
  const size = "1.5rem";
  const link = [
    {
      key: "github",
      icon: <FiGithub style={{ fontSize: size }} />,
      url: "https://github.com/bellapd",
    },
    {
      key: "linkedin",
      icon: <FiLinkedin style={{ fontSize: size }} />,
      url: "https://www.linkedin.com/in/annabellapd/",
    },
    {
      key: "email",
      icon: <MdOutlineMail style={{ fontSize: size }} />,
      url: "mailto:annabellaputridirgo@gmail.com",
    },
  ];

  return (
    <Flex as="footer" marginBottom={20} direction="column" align="center">
      <Flex maxW="container.md">
        {link.map((item) => (
          <Link key={item.key} as="a" px={4} py={2} href={item.url} isExternal>
            <IconButton
              key={item.key}
              aria-label={item.key}
              icon={item.icon}
              variant="ghost"
              isRound
              mr={5}
            />
          </Link>
        ))}
      </Flex>
      <Flex as="p" mt={2}>
        Annabella Putri Dirgo © {new Date().getFullYear()}
      </Flex>
    </Flex>
  );
}
