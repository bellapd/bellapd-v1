import {
  Container,
  Text,
  VStack,
  Box,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import Dottedbox from "../components/Dottedbox";

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

const Testimonial = () => {
  return (
    <Container maxW="2xl" p={5}>
      <Dottedbox />
      <VStack spacing={3}>
        <VStack alignItems="center">
          <Avatar name="avatar" src={testimonial.image} size="lg" />
          <Box textAlign="center">
            <Text fontWeight="bold" fontSize="lg">
              {testimonial.username}
            </Text>
            <Text
              p={5}
              color={useColorModeValue("gray.600", "gray.300")}
              zIndex={5}
            >
              {testimonial.content}
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Testimonial;
