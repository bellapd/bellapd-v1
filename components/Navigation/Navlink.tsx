import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  var isActive = router.pathname === href;

  if (href.includes("posts")) {
    isActive = router.pathname.includes("/posts");
  }

  if (href.includes("portfolio")) {
    isActive = router.pathname.includes("/portfolio");
  }

  return (
    <NextLink href={href}>
      <Link
        px={3}
        py={2}
        rounded="full"
        ml="5"
        _hover={{
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
}
