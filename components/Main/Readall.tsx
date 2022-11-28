import { LinkBox, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Navigation(): JSX.Element {
  return (
    <Stack direction="row" spacing={4} mt={6}>
      <LinkBox
        mt="1rem"
        _hover={{
          "& > *": {
            transform: "translateX(10px)",
          },
        }}
        width="130px"
      >
        <NextLink href="/posts">Read More</NextLink>
        <ArrowForwardIcon
          ml="0.25rem"
          translateX="0"
          transition="transform .15s ease-in-out"
        />
      </LinkBox>
    </Stack>
  );
}
