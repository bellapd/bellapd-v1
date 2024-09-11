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
import Spotify from "../components/Spotify/NowPlaying";


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
              Hey, Call me Bella
            </Heading>

            <VStack mt={2} spacing={2} align="left" justify="left">
              <Text>
              I am a lifelong learner and a curious individual. It all started when I wrote my first line of code and realized I could solve problems with just my computer. Since then, I have been hooked on tech, exploring AI, machine learning, and how these tools can put an impact to the community.
              <br />
              When I am not breaking down complex algorithms, you can find me lost in a book 📖, perfecting my yoga poses🧘🏻‍♀️, or trying to figure out how many cups of coffee ☕️ it takes to fuel creativity (spoiler: it is a lot).
              </Text>
            </VStack>
            <Footer />
          </Box>
          <Box>
            <Heading as="h2" fontSize="2rem" fontWeight="700">
              Featured Posts
            </Heading>
            <SimpleGrid columns={isDesktop ? 2 : 1} spacing="10" mt="5">
              {posts.map((post) => (
                <LinkBox as="article" key={post.slug}>
                  <Box
                    key={post.slug}
                    boxShadow="2xl"
                    p="5"
                    // make all have the same width and height
                    h="100%"
                    w="100%"
                    rounded="lg"
                    _hover={{
                      // pop up effect
                      transform: "translateY(-5px)",
                      transition: "all 0.2s ease-in-out",
                    }}
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
        <Spotify />
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
