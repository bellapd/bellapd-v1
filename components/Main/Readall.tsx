import { Button, ButtonGroup, Stack, textDecoration } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Navigation(): JSX.Element {
  return (
    <Stack direction="row" spacing={4} mt={6}>
      <Button
        rightIcon={<ArrowForwardIcon />}
        _hover={{
          textDecoration: "none",
        }}
        variant="ghost"
      >
        <Link href="/posts">Read All Post</Link>
      </Button>
    </Stack>
  );
}
