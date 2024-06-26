import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Blog
          </Heading>
          <Text fontSize="lg" color="gray.600">
            A place where I share my thoughts and experiences.
          </Text>
        </Box>
        <Box>
          <Image src="/images/blog-image.jpg" alt="Blog" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Recent Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a summary of the first post.</Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a summary of the second post.</Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;