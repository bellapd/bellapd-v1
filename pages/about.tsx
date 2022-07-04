import { Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <Stack align="Left">
        <Heading fontSize="40px">
          <mark>About</mark> me
        </Heading>
      </Stack>

      <Stack align="right" direction="row" my={7}>
        <Text>
          My name is Annabella Putri Dirgo, I'm a student at the National Tsing
          Hua University, Hsinchu, Taiwan. I'm currently working on projects
          related to web development using tools like React, Next-js, Golang,
          and Docker.
        </Text>
      </Stack>
    </Layout>
  );
};

export default About;
