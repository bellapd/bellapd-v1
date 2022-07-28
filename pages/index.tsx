import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Posts from "../components/Posts";
import Layout from "../components/Layout";
import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Container,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "../components/Motion";
import Header from "../components/Header";
import type { IPost } from "../types/post.type";
import { DateTime } from "luxon";
import Readall from "../components/Readall";
import Dottedbox from "../components/Dottedbox";

const ANIMATION_DURATION = 0.5;

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
  const color = "pink.400";
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Layout>
      <Dottedbox />
      <Container>
        <Flex
          direction={["column", "column", "row"]}
          display={{ base: "flex", md: "flex" }}
        >
          <MotionBox
            opacity="0"
            initial={{
              translateX: -150,
              opacity: 0,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: ANIMATION_DURATION,
              },
            }}
            m="auto"
            mb={[16, 16, "auto"]}
          >
            <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
              <Avatar
                size="2xl"
                showBorder={true}
                borderColor={color}
                src={"/images/avatar.png"}
              />
            </MotionBox>
          </MotionBox>
          <MotionFlex
            position="relative"
            ml={["auto", "auto", 16]}
            m={["auto", "initial"]}
            w={["90%", "85%", "80%"]}
            maxW="500px"
            opacity="0"
            justify="center"
            direction="column"
            initial={{
              opacity: 0,
              translateX: 150,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: ANIMATION_DURATION,
              },
            }}
          >
            <Box position="relative">
              <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                <Header
                  underlineColor={color}
                  mt={0}
                  cursor="pointer"
                  width="max-content"
                >
                  Welcome!
                </Header>
              </MotionBox>
            </Box>
            <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
              My name is{" "}
              <Box as="strong" fontWeight="600">
                Bella
              </Box>{" "}
              and I&apos;m a{" "}
              <Box as="span" whiteSpace="nowrap">
                Full Time Student and
              </Box>{" "}
              <Box as="span" whiteSpace="nowrap">
                an Long Time Learner 👩🏻‍💻
              </Box>
            </Box>
            <Box
              as="h2"
              fontSize="2xl"
              fontWeight="400"
              mt={5}
              textAlign="left"
            >
              I write about the things I&apos;m working on and share what
              I&apos;ve learned 🥸
            </Box>
          </MotionFlex>
        </Flex>
      </Container>

      <Stack align={"left"} pt={5}>
        <Text as="b" fontSize="xl" pb={2}>
          Recent posts
        </Text>

        <Posts posts={posts} type="blog" />
        <Readall />
      </Stack>
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
