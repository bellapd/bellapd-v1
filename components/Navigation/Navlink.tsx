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
        variant="ghost"
        color={isActive ? "gray.800" : "gray.300"}
        _hover={{ color: "gray.800" }}
        _active={{ color: "gray.800" }}
        ml="2rem"
      >
        {children}
      </Link>
    </NextLink>
  );
}
