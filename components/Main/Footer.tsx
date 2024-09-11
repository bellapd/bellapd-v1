import { Flex, Link, IconButton } from "@chakra-ui/react";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";

export default function Footer(): JSX.Element {
  const size = "1.5rem";
  const link = [
    {
      key: "github",
      icon: <RiGithubFill style={{ fontSize: size }} />,
      url: "https://github.com/bellapd",
    },
    {
      key: "linkedin",
      icon: <RiLinkedinFill style={{ fontSize: size }} />,
      url: "https://www.linkedin.com/in/annabellapd/",
    },
    {
      key: "email",
      icon: <RiMailFill style={{ fontSize: size }} />,
      url: "mailto:annabellaputridirgo@gmail.com",
    },
    {
      key: "resume",
      icon: <IoIosPaper style={{ fontSize: size }} />,
      url: "https://drive.google.com/file/d/1dZOBymir2dmN6jAKRVSCkXmND_vo-xgx/view?usp=share_link",
    },
  ];

  return (
    <Flex direction="column">
      <Flex mr="auto">
        {link.map((item) => (
          <Link key={item.key} as="a" px={2} py={5} href={item.url} isExternal>
            <IconButton
              key={item.key}
              aria-label={item.key}
              icon={item.icon}
              variant="ghost"
              isRound
              mr={4}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
