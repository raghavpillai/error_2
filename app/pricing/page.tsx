"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaSnowflake, FaStar, FaGem } from "react-icons/fa";

const PricingCard = ({ title, price, features, icon, isPopular = false }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = isPopular ? "red.500" : "green.200";
  
  return (
    <Box
      borderWidth="2px"
      borderColor={borderColor}
      borderRadius="xl"
      p={6}
      bg={bgColor}
      position="relative"
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-8px)" }}
      boxShadow={isPopular ? "xl" : "md"}
    >
      {isPopular && (
        <Text
          position="absolute"
          top="-4"
          right="50%"
          transform="translateX(50%)"
          bg="red.500"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
        >
          Most Popular
        </Text>
      )}
      
      <VStack spacing={4}>
        <Icon as={icon} w={10} h={10} color={isPopular ? "red.500" : "green.500"} />
        <Heading size="lg">{title}</Heading>
        <Stack spacing={1} align="center">
          <Text fontSize="4xl" fontWeight="bold">
            ${price}
          </Text>
          <Text color="gray.500">per season</Text>
        </Stack>
        
        <List spacing={3} textAlign="start" px={12} py={4}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckIcon} color={isPopular ? "red.500" : "green.500"} />
              {feature}
            </ListItem>
          ))}
        </List>
        
        <Button
          w="full"
          colorScheme={isPopular ? "red" : "green"}
          variant={isPopular ? "solid" : "outline"}
          size="lg"
          mt={4}
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default function PricingPage() {
  const plans = [
    {
      title: "Basic",
      price: "499",
      icon: FaSnowflake,
      features: [
        "Up to 100ft of roof line lighting",
        "Basic tree wrapping (2 trees)",
        "Professional installation",
        "Post-season removal",
        "Basic support",
      ],
    },
    {
      title: "Premium",
      price: "999",
      icon: FaStar,
      isPopular: true,
      features: [
        "Up to 200ft of roof line lighting",
        "Advanced tree wrapping (4 trees)",
        "Custom color schemes",
        "Professional installation",
        "Post-season removal",
        "Priority support",
        "Maintenance visits",
      ],
    },
    {
      title: "Custom",
      price: "1499+",
      icon: FaGem,
      features: [
        "Unlimited roof line lighting",
        "Multiple tree wrapping",
        "Custom animations",
        "Professional installation",
        "Post-season removal",
        "24/7 VIP support",
        "Weekly maintenance",
        "Smart home integration",
      ],
    },
  ];

  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="7xl">
        <Stack spacing={8} alignItems="center" textAlign="center" mb={16}>
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, green.500, red.500)"
            backgroundClip="text"
          >
            Simple, Transparent Pricing
          </Heading>
          <Text fontSize="xl" color="gray.500" maxW="2xl">
            Choose the perfect holiday lighting package for your home. All plans include
            professional installation, maintenance, and removal services.
          </Text>
        </Stack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          justify="center"
          align="stretch"
        >
          {plans.map((plan, index) => (
            <Box
              key={index}
              flex="1"
              maxW={{ base: "full", lg: "380px" }}
              w="full"
            >
              <PricingCard {...plan} />
            </Box>
          ))}
        </Flex>

        <Box mt={16} textAlign="center">
          <Text color="gray.500">
            Need a custom solution? Contact us for a personalized quote.
          </Text>
          <Button
            mt={4}
            size="lg"
            colorScheme="green"
            variant="outline"
          >
            Contact Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
}