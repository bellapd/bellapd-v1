import { VStack, Text, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Milestone from "../components/Milestone";
import Skills from "../components/Skillset";
import Profileheading from "../components/Profileheading";

const About: NextPage = () => {
  return (
    <Layout>
      <VStack align="right" direction="row">
        <Profileheading />
      </VStack>
      <VStack>
        <Milestone />

        <Skills />
      </VStack>
    </Layout>
  );
};

export default About;
