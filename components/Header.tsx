import * as React from "react";
import {
  Container,
  chakra,
  Stack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Container p={{ base: 2, sm: 7 }}>
      <Stack direction="column" spacing={6} alignItems="center">
        <Box
          py={2}
          px={3}
          bg="dark"
          w="max-content"
          color="white"
          rounded="md"
          fontSize="sm"
          _hover={{
            transform: "scale(1.1)",
            transition: "all .25s ease-in-out",
          }}
        >
          <Stack direction={{ base: "column", sm: "row" }}>
            <Text fontWeight="bold">Welcome 👋🏼</Text>
          </Stack>
        </Box>
        <chakra.h1
          fontSize={{ base: "4xl", sm: "5xl" }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          My name is {""}
          <chakra.span
            color="dark"
            bg="linear-gradient(transparent 50%, #F0C940 50%)"
          >
            Bella
          </chakra.span>
        </chakra.h1>
        <Text
          maxW="550px"
          fontSize="xl"
          textAlign="center"
          color={useColorModeValue("black", "white")}
        >
          I'm a full time student and a long time Learner 👩🏻‍💻. I write about
          things I'm working on and share what I've learned 🥸
        </Text>
      </Stack>
    </Container>
  );
};

export default HeroSection;
