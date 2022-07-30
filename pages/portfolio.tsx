import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Posts from "./../components/Posts";
import { Text, Heading, VStack, Box } from "@chakra-ui/react";
import type { IPost } from "../types/post.type";

export default function Portfolio({
  portfolios,
}: {
  portfolios: IPost[];
}): JSX.Element {
  return (
    <Layout>
      <VStack>
        <Box textAlign="center">
          <Heading fontSize="3xl" mb={3}>
            Portfolio
          </Heading>
          <Text>Here is some projects that I have done!</Text>
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
