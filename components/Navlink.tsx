import { Link } from "@chakra-ui/react";
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
        px={3}
        py={2}
        rounded="full"
        _hover={{
          textDecoration: "underline",
        }}
      >
        {children}
      </Link>
    </Page>
  );
};

export default Navlink;
