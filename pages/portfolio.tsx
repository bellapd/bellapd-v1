import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Posts from "./../components/Posts";
import { Text, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import type { IPost } from "../types/post.type";

export default function Portfolio({
  portfolios,
}: {
  portfolios: IPost[];
}): JSX.Element {
  return (
    <Layout>
      <VStack align="left">
        <Heading as="h1" size="xl" color={useColorModeValue("dark", "light")}>
          Portfolio
        </Heading>
        <Text fontSize="15px">Here is some projects that I have done</Text>
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
