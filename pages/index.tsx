import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Container,
  VStack,
  useBreakpointValue,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "../lib/types";
import { sortPosts } from "../lib/post";
import Seo from "../components/Main/Seo";
import Layout from "../components/Main/Layout";
import Footer from "../components/Main/Footer";
import Readall from "../components/Main/Readall";

export default function Home({ posts }: { posts: Post[] }): JSX.Element {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Layout>
      <Container maxWidth="container.lg">
        <Seo title="Home" type="website" />
        <VStack spacing="5rem" align="left">
          <Box
            mt="3rem"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Image src="/images/avatar.png" boxSize="140px" />
            <Heading as="h1" fontSize="4rem" fontWeight="700">
              Bella
            </Heading>

            <VStack mt={3} spacing={2} align="left" justify="left">
              <Text>
                A web developer enthusiast, long time learner, and a curious
              </Text>
            </VStack>
            <Footer />
          </Box>

          <Box>
            <Heading as="h2" fontSize="2rem" fontWeight="700">
              Featured Posts
            </Heading>
            <SimpleGrid columns={isDesktop ? 3 : 1} spacing="10" mt="5">
              {posts.map((post) => (
                <LinkBox as="article" key={post.slug}>
                  <Box
                    key={post.slug}
                    boxShadow="2xl"
                    p="7"
                    w="12rem"
                    rounded="lg"
                  >
                    <Heading as="h3" fontSize="2rem" my={1}>
                      <LinkOverlay
                        href={`/posts/${post.slug}`}
                        _hover={{ color: "gray.800" }}
                      >
                        {post.frontMatter.title}
                      </LinkOverlay>
                    </Heading>
                    <Text>{post.frontMatter.description}</Text>
                    <Box>
                      {post.frontMatter.tags.map((tag: string) => (
                        <Text
                          key={tag}
                          as="a"
                          fontSize="sm"
                          color="gray.500"
                          mr={2}
                          href={`/tags/${tag}`}
                          _hover={{
                            textDecoration: "underline",
                          }}
                        >
                          #{tag}
                        </Text>
                      ))}
                    </Box>
                  </Box>
                </LinkBox>
              ))}
            </SimpleGrid>
            <Readall />
          </Box>
        </VStack>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  // get the name of all folders in /content/posts
  const folders = fs.readdirSync(path.join(process.cwd(), "content", "posts"));

  // iterate through all the files in /content/posts
  var posts: Post[] = folders.map((slug) => {
    const content = fs.readFileSync(
      path.join("content", "posts", slug, "index.mdx"),
      "utf-8"
    );
    const { data: frontMatter } = matter(content);

    return {
      frontMatter,
      slug: slug,
    };
  });

  posts = posts.filter((post: Post) => post.frontMatter.publish);

  // sort the posts by date
  posts = sortPosts(posts);

  posts = posts.slice(0, 6);

  return {
    props: {
      posts,
    },
  };
};
