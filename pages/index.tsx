import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts from "../components/Posts";
import Layout from "../components/Layout";
import { Heading, VStack, Box } from "@chakra-ui/react";
import type { IPost } from "../types/post.type";
import Readall from "../components/Readall";

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
  return (
    <Layout>
      <VStack spacing={8}>
        <Heading as="h1" fontSize="8xl" maxW={{ base: "m", md: "xl" }}>
          It's{" "}
          <Box
            as="span"
            bgGradient="linear-gradient(90deg,#326199,#4fb1a1,#fcc055,#eb8d50,#df6e5b)"
            bgClip="text"
          >
            Annabella
          </Box>
        </Heading>
      </VStack>
      <Heading as="h2" justifyContent={"center"} size="lg" my={6}>
        Recent posts
      </Heading>
      <Posts posts={posts} />
      <Readall />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // get all folders' in content/portfolios
  const folders = fs.readdirSync(path.join(process.cwd(), "content", "blogs"));

  // iterate through all the files in /content/posts
  const posts = folders.slice(0, 2).map((slug) => {
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

  return {
    props: {
      posts,
    },
  };
};
