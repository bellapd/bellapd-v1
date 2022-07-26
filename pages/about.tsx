import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Milestone from "../components/Milestone";
import Skills from "../components/Skillset";

const About: NextPage = () => {
  return (
    <Layout>
      <Stack align="Left">
        <Heading as="h1" size="xl" color={useColorModeValue("dark", "light")}>
          Hi There 👋🏼
        </Heading>
      </Stack>

      <VStack align="right" direction="row" my={7}>
        <Text>
          My name is <strong>Annabella Putri Dirgo</strong>, I'm currently an
          undergraduate student at National Tsing Hua University in Hsinchu,
          Taiwan and I study Electrical Engineering and Computer Science. I'm
          working on projects related to web development using tools like{" "}
          <kbd>React</kbd>, <kbd>Next-js</kbd>, <kbd>Golang</kbd>, and{" "}
          <kbd>Docker</kbd>.
        </Text>

        <Milestone />

        <Skills />
      </VStack>
    </Layout>
  );
};

export default About;
