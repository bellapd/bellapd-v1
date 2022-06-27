import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Posts from "./../components/Posts";
import { Heading, Box, Stack } from "@chakra-ui/react";
import type { IPost } from "../types/post.type";

export default function Portfolio({
  portfolios,
}: {
  portfolios: IPost[];
}): JSX.Element {
  return (
    <Layout>
      <Stack align="left">
        <Heading as="h1" size="3xl">
          <Box as="span" bg="#24269B" bgClip="text">
            P
          </Box>
          ortfolio
        </Heading>
      </Stack>
      <Posts posts={portfolios} />
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
function useColorMode() {
  throw new Error("Function not implemented.");
}
