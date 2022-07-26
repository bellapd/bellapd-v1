import Tags from "./Tags";
import NextLink from "next/link";
import type { IPost } from "../types/post.type";
import { LinkBox, Text, LinkOverlay, Heading } from "@chakra-ui/react";

export default function Posts({
  posts,
  type,
}: {
  posts: IPost[];
  type: string;
}): JSX.Element {
  return (
    <>
      {posts.map((post) => {
        return (
          <LinkBox
            as="article"
            p="5"
            my={5}
            borderWidth="2px"
            rounded="md"
            key={post.slug}
            borderColor="gray.300"
            _hover={{
              border: `2px solid`,
              borderColor: "dark",
              boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Text fontSize="sm" as="i" color="gray.700">
              {post.frontMatter.date} - {post.frontMatter.readingTime} reading
            </Text>
            <NextLink href={"/" + type + "/" + post.slug} passHref>
              <LinkOverlay>
                <Heading fontSize={"3xl"}>{post.frontMatter.title}</Heading>
              </LinkOverlay>
            </NextLink>
            {post.frontMatter.tags ? (
              <>
                <Text as="p" my={5} color="gray.700">
                  {post.frontMatter.description}
                </Text>
                <Tags tags={post.frontMatter.tags} />
              </>
            ) : (
              <Text as="p" mt={5} color="gray.700">
                {post.frontMatter.description}
              </Text>
            )}
          </LinkBox>
        );
      })}
    </>
  );
}
