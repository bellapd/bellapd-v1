import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts from "../components/Posts";
import Layout from "../components/Layout";
import { Heading, Box, HStack, Text, VStack } from "@chakra-ui/react";
import type { IPost } from "../types/post.type";
import { DateTime } from "luxon";
import Readall from "../components/Readall";
import { Image } from "@chakra-ui/react";

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
  return (
    <Layout>
      <HStack align={"left"} my={6} mb={10}>
        <Image
          borderRadius="full"
          boxSize="100px"
          src="/images/avatar.png"
          mr={5}
          mt={-1}
        />
        <Heading as="h2" size="2xl">
          I'm{" "}
          <Box as="span" bg="#E9CA53" bgClip="text">
            Anna
          </Box>
          bella
          <Text fontSize="sm" my={4}>
            An Undergraduate Student of Electrical Engineering and Computer
            Science at National Tsing Hua University.
          </Text>
        </Heading>
      </HStack>

      <Text as="b" fontSize="xl">
        Recent posts
      </Text>
      <Posts posts={posts} type="blog" />
      <Readall />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const folders = fs.readdirSync(path.join(process.cwd(), "content", "blogs"));

  var posts = folders.slice(0, 2).map((slug) => {
    const content = fs.readFileSync(
      path.join("content", "blogs", slug, "index.mdx"),
      "utf-8"
    );
    const { data: frontMatter } = matter(content);
    return {
      frontMatter,
      slug: slug,
    };
  });

  posts.sort((a, b) => {
    const aDate: typeof a.frontMatter.date = DateTime.fromFormat(
      a.frontMatter.date,
      "LLLL dd, yyyy"
    );
    const bDate: typeof a.frontMatter.date = DateTime.fromFormat(
      b.frontMatter.date,
      "LLLL dd, yyyy"
    );
    return bDate - aDate;
  });

  return {
    props: {
      posts,
    },
  };
};
