import {
  VStack,
  Heading,
  Box,
  Link,
  Container,
  BoxProps,
  Circle,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";
import { FiPackage, FiHome, FiCheckCircle } from "react-icons/fi";

const Milestones = () => {
  const linkColor = "red.500";
  const linkHoverColor = "gray.500";

  return (
    <Container maxW="5xl" p={{ base: 2, sm: 10 }}>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="4xl" fontWeight="bold" my={5}>
            Milestone
          </Heading>

          <Text fontSize={"lg"} my={4}>
            <strong>2022</strong>
          </Text>
          <Box>
            <MilestoneItem icon={FaTools}>
              Learnt{" "}
              <Link
                href="https://docs.docker.com"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Docker
              </Link>{" "}
              ,{" "}
              <Link
                href="https://nextjs.org"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Next.js
              </Link>{" "}
              ,{" "}
              <Link
                href="https://reactjs.org/docs/getting-started.html"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                React
              </Link>{" "}
              , and{" "}
              <Link
                href="https://go.dev/doc/"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Golang
              </Link>{" "}
            </MilestoneItem>

            <MilestoneItem icon={FiPackage}>
              Publish Docker Series{" "}
              <Link
                href="https://bellapd.vercel.app/posts/docker-series-1"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Posts
              </Link>
            </MilestoneItem>

            <MilestoneItem icon={FiHome} skipTrail>
              Make my portfolio website with React, ChakraUI and Typescript{" "}
              <Link
                href="https://github.com/bellapd/bellapd.git"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                source on Github
              </Link>
            </MilestoneItem>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

interface MilestoneItemProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {
  const color = useColorModeValue("gray.700", "gray.500");
  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={useColorModeValue("gray.600", "gray.500")}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box
          as={icon}
          size="1.25rem"
          color={color}
          pos="absolute"
          left="0.875rem"
          top="0.875rem"
        />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};

export default Milestones;
