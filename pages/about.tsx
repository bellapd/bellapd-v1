import { Heading, Stack, Text, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import { Color } from "../utils/color";

const About: NextPage = () => {
  return (
    <Layout>
      <Stack align="Left">
        <Heading as="h1" size="3xl">
          <Box as="span" bg="#F2A814" bgClip="text">
            A
          </Box>
          bout
        </Heading>
      </Stack>

      <Stack align="right" direction="row" my={7}>
        <Text>
          My name is Annabella Putri Dirgo, I'm a student at the National Tsing
          Hua University, Hsinchu, Taiwan. I'm currently working on projects
          related to web development using tools like React, Next-js, Golang,
          and Docker. I'm also creating a content for my blog where I discuss
          projects that I'm working on and create tutorials to educate others.
        </Text>
      </Stack>
    </Layout>
  );
};

export default About;
