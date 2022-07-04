import Tags from "./Tags";
import NextLink from "next/link";
import type { IPost } from "../types/post.type";
import { LinkBox, Text, LinkOverlay, Heading } from "@chakra-ui/react";
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
            borderColor="blackAlpha.800"
            _hover={{
              border: `1px solid`,
              borderColor: randomColor + ".200",
              boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Text fontSize="sm" color="gray.500">
              {post.frontMatter.date} - {post.frontMatter.readingTime} reading
            </Text>
            <NextLink href={"/" + type + "/" + post.slug} passHref>
              <LinkOverlay>
                <Heading as="h1">{post.frontMatter.title}</Heading>
              </LinkOverlay>
            </NextLink>
            <Text as="p" my={5}>
              {post.frontMatter.description}
            </Text>
            {post.frontMatter.tags && (
              <Tags tags={post.frontMatter.tags} color={randomColor} />
            )}
          </LinkBox>
        );
      })}
    </>
  );
}
