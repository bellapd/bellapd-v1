import { VStack, Text, Button, Box, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Main/Layout";
import Milestone from "../components/About/Milestone";
import Skills from "../components/About/Skillset";

interface TestimonialAttributes {
  username: string;
  content: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: "Annabella Putri Dirgo",
  image: "./images/avatar.png",
  content: `I'm currently an undergraduate student at National Tsing Hua University in Hsinchu, Taiwan and I study Electrical Engineering and Computer Science. I'm working on projects related to web development using tools like React, Next-js, Golang, and Docker.`,
};

const About: NextPage = () => {
  return (
    <Layout>
      <VStack align="right" direction="row">
        <Container maxW="2xl" p={5}>
          <VStack alignItems="center">
            <Box textAlign="center" mt="3rem">
              <Text fontSize="5xl" fontWeight="bold">
                {testimonial.username}
              </Text>
              <Text p={5} color="gray.700" zIndex={5}>
                {testimonial.content}
              </Text>
              <Button
                colorScheme="red"
                size="md"
                mt={4}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/16dZNSCPfkM1Z9jcgkdZhan7I34dlK_Pn/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Download CV
              </Button>
            </Box>
          </VStack>
        </Container>
      </VStack>
      <VStack>
        <Milestone />

        <Skills />
      </VStack>
    </Layout>
  );
};

export default About;
