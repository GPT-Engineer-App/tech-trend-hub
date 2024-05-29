import { useState } from "react";
import { Container, VStack, Heading, Text, Box, Button, Image, HStack } from "@chakra-ui/react";
import { FaSync } from "react-icons/fa";

const techItems = [
  {
    id: 1,
    name: "Quantum Computing",
    description: "Harnessing the power of quantum mechanics to perform computations far beyond the capabilities of classical computers.",
    image: "https://images.unsplash.com/photo-1617839625591-e5a789593135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nfGVufDB8fHx8MTcxNjk0MTQ5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Artificial Intelligence",
    description: "AI is transforming industries with its ability to learn, adapt, and perform tasks that typically require human intelligence.",
    image: "https://images.unsplash.com/photo-1712847333419-227c1ce1c82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTcxNjk0MTQ5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Blockchain",
    description: "A decentralized ledger technology that ensures secure and transparent transactions.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWlufGVufDB8fHx8MTcxNjk0MTQ5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "5G Technology",
    description: "The next generation of mobile networks, offering faster speeds and more reliable connections.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHw1RyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE2OTQxNDk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    name: "Augmented Reality",
    description: "AR overlays digital information onto the real world, enhancing the user's perception and interaction with their environment.",
    image: "https://images.unsplash.com/photo-1590126141992-d6a613152c77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5fGVufDB8fHx8MTcxNjk0MTQ5OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [items, setItems] = useState(techItems);

  const updateItems = () => {
    // For simplicity, we are just shuffling the existing items
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Exclusive High-Trend Technologies
        </Heading>
        <Button leftIcon={<FaSync />} colorScheme="teal" onClick={updateItems}>
          Update Technologies
        </Button>
        {items.map((item) => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <HStack spacing={4}>
              <Image boxSize="100px" objectFit="cover" src={item.image} alt={item.name} />
              <VStack align="start">
                <Heading as="h3" size="md">
                  {item.name}
                </Heading>
                <Text>{item.description}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
