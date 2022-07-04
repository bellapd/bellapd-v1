import { Link, useColorModeValue } from "@chakra-ui/react";
import Page from "next/link";

const Navlink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Page href={href}>
      <Link
        px={4}
        py={2}
        rounded={"full"}
        _hover={{
          bg: "gray.50",
        }}
      >
        {children}
      </Link>
    </Page>
  );
};

export default Navlink;
