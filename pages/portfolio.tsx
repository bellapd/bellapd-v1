import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Main/Layout";
import Posts from "../components/Posts/RelatedPosts";
import { Text, Heading, VStack, Box } from "@chakra-ui/react";
import type { IPost } from "../types/post.type";

export default function Portfolio({
  portfolios,
}: {
  portfolios: IPost[];
}): JSX.Element {
  return (
    <Layout>
      <VStack spacing="5rem" align="left">
        <Box
          mt="5rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontSize="4rem" fontWeight="700">
            Portfolio
          </Heading>
        </Box>
      </VStack>
      <Posts posts={portfolios} type="portfolio" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // get all folders' in content/portfolios
  const folders = fs.readdirSync(
    path.join(process.cwd(), "content", "portfolios")
  );

  // iterate through all the folders
  const portfolios = folders.map((slug) => {
    const content = fs.readFileSync(
      path.join("content", "portfolios", slug, "index.mdx"),
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
      portfolios,
    },
  };
};
