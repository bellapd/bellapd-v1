import NextLink from "next/link";
import type { Post } from "../../lib/types";
import {
  Box,
  Text,
  HStack,
  LinkBox,
  Heading,
  LinkOverlay,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";

function Cards({ posts, type }: { posts: Post[]; type: string }) {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const fontSize = isDesktop ? "md" : "sm";
  const padding = isDesktop ? "3" : "2";

  return (
    <SimpleGrid columns={isDesktop ? 2 : 1} spacing="10" mt="5">
      {posts.map((post) => (
        <LinkBox
          as="article"
          key={post.slug}
          my={5}
          p={5}
          boxShadow="2xl"
          rounded="lg"
          _hover={{
            // pop up effect
            transform: "translateY(-5px)",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <NextLink href={"/" + type + "/" + post.slug} passHref>
            <LinkOverlay fontStyle="normal">
              <Heading
                as="h2"
                fontSize="1.5rem"
                fontWeight="bold"
                fontFamily="heading"
              >
                {post.frontMatter.title}
              </Heading>
              <HStack
                spacing={isDesktop ? 0 : 3}
                mt={3}
                display={isDesktop ? "block" : "flex"}
              >
                <Text
                  fontSize={fontSize}
                  color="gray.500"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  {post.frontMatter.description}
                </Text>
                {post.frontMatter.series && (
                  <Box
                    px={padding}
                    borderRadius="md"
                    bg="inherit"
                    _dark={{
                      borderColor: "gray.400",
                    }}
                    border="1px solid"
                    borderColor="gray.500"
                    width="fit-content"
                    ml={0}
                  >
                    <Text
                      fontSize={fontSize}
                      color="gray.500"
                      _dark={{
                        color: "gray.100",
                      }}
                      fontFamily="Montserrat, sans-serif"
                      fontWeight={600}
                    >
                      Series
                    </Text>
                  </Box>
                )}
              </HStack>
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
}

export default function RelatedPosts({
  posts,
  type,
}: {
  posts: Post[];
  type: string;
}) {
  return (
    <>
      {posts.length > 0 && (
        <Box mt={8}>
          <Cards posts={posts} type={type} />
        </Box>
      )}
    </>
  );
}
