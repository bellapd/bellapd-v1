import {
  Container,
  Box,
  chakra,
  Text,
  Icon,
  SimpleGrid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiDocker,
  SiTypescript,
  SiChakraui,
  SiGithub,
  SiPython,
} from "react-icons/si";
import { GrAnalytics, GrGolang } from "react-icons/gr";
import { IconType } from "react-icons";

interface IFeature {
  icon: IconType;
  category: string;
  heading: string;
}

const features: IFeature[] = [
  {
    heading: "React",
    icon: FaReact,
    category: "Web Technology",
  },
  {
    heading: "Chakra UI",
    icon: SiChakraui,
    category: "Web Technology",
  },
  {
    heading: "Next.js",
    icon: SiNextdotjs,
    category: "Web Technology",
  },
  {
    heading: "TypeScript",
    icon: SiTypescript,
    category: "Programming Language",
  },
  {
    heading: "Python",
    icon: SiPython,
    category: "Programming Language",
  },
  {
    heading: "Golang",
    icon: GrGolang,
    category: "Programming Language",
  },
  {
    heading: "Git",
    icon: SiGithub,
    category: "Tools",
  },
  {
    heading: "Docker",
    icon: SiDocker,
    category: "Tools",
  },
];

const Skills = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="left">
        Technical Skills
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            p={7}
            rounded="lg"
            textAlign="center"
            position="relative"
            width="170px"
            height="150px"
            css={{
              border: `2px solid`,
              borderColor: "transparent",
            }}
            _hover={{
              border: `2px solid`,
              borderColor: "gray.700",
              boxShadow: "black.800",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bg="gray.700"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              <Icon color="white" w={8} h={8} as={feature.icon} />
            </Flex>
            <Text fontWeight="600" fontSize="xl" my={3}>
              {feature.heading}
            </Text>
            <Text fontSize="md">{feature.category}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Skills;
