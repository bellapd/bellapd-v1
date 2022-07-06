import NextLink from "next/link";
import type { IPost } from "../types/post.type";
import {
  LinkBox,
  Text,
  LinkOverlay,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Color } from "../utils/color";

export default function Posts({
  posts,
  type,
}: {
  posts: IPost[];
  type: string;
}): JSX.Element {
  var randomColor: string = Color();
  return (
    <>
      {posts.map((post) => {
        return (
          <LinkBox
            as="article"
            p="5"
            my={5}
            borderWidth="1px"
            rounded="md"
            key={post.slug}
            //outline color
            borderColor={useColorModeValue("black", "white")}
            _hover={{
              border: `2px solid`,
              borderColor: randomColor + ".300",
              boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Text fontSize="sm" as="i" color="gray.500">
              {post.frontMatter.date} - {post.frontMatter.readingTime} reading
            </Text>
            <NextLink href={"/" + type + "/" + post.slug} passHref>
              <LinkOverlay>
                <Heading fontSize={"3xl"}>{post.frontMatter.title}</Heading>
              </LinkOverlay>
            </NextLink>
            <Text as="p" my={5}>
              {post.frontMatter.description}
            </Text>
          </LinkBox>
        );
      })}
    </>
  );
}
