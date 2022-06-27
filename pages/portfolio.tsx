import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Posts from "./../components/Posts";
import { DateTime } from "luxon";
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
  const folders = fs.readdirSync(
    path.join(process.cwd(), "content", "portfolios")
  );

  var posts = folders.map((slug) => {
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
