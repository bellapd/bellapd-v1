import { Heading, Text, Stack, Divider, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Milestone from "../components/Milestone";
import Skillset from "../components/Skillset";

const About: NextPage = () => {
  return (
    <Layout>
      <Stack align="Left">
        <Heading fontSize="40px">
          <mark>About</mark> me
        </Heading>
      </Stack>

      <VStack align="right" direction="row" my={7}>
        <Text>
          Hi There 👋🏼 , My name is <strong>Annabella Putri Dirgo</strong>, I'm
          currently an undergraduate student at National Tsing Hua University in
          Hsinchu, Taiwan and I study Electrical Engineering and Computer
          Science. I'm working on projects related to web development using
          tools like <kbd>React</kbd>, <kbd>Next-js</kbd>, <kbd>Golang</kbd>,
          and <kbd>Docker</kbd>.
        </Text>

        <Milestone />

        <Skillset />
      </VStack>
    </Layout>
  );
};

export default About;
