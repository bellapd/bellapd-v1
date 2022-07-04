import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Navigation(): JSX.Element {
  return (
    <Stack direction="row" spacing={4}>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="gray"
        variant="ghost"
        transition={"all 0.3s ease-in-out"}
      >
        <Link href="/blog">Read All Post</Link>
      </Button>
    </Stack>
  );
}
