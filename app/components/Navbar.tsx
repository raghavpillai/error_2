"use client";

import {
  Box,
  Flex,
  Button,
  Link,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1000}
      bg={bgColor}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.xl">
        <Flex
          h="70px"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left section - Logo and Company Name */}
          <Flex alignItems="center">
            {/* You can add your logo image here */}
            <Text
              fontSize="xl"
              fontWeight="bold"
              color="green.600"
              _hover={{ color: "green.500" }}
              cursor="pointer"
            >
              Bright Nights Christmas Lighting
            </Text>
          </Flex>

          {/* Center section - Navigation Links */}
          <Flex gap={8} alignItems="center">
            <Link
              as={NextLink}
              href="/pricing"
              fontSize="md"
              fontWeight="medium"
              color="gray.600"
              _hover={{ color: "red.500", textDecoration: "none" }}
            >
              Pricing
            </Link>
            <Link
              as={NextLink}
              href="/testimonials"
              fontSize="md"
              fontWeight="medium"
              color="gray.600"
              _hover={{ color: "red.500", textDecoration: "none" }}
            >
              Testimonials
            </Link>
            <Link
              as={NextLink}
              href="/faq"
              fontSize="md"
              fontWeight="medium"
              color="gray.600"
              _hover={{ color: "red.500", textDecoration: "none" }}
            >
              FAQ
            </Link>
          </Flex>

          {/* Right section - Dashboard Button */}
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="green"
            variant="solid"
            size="md"
            _hover={{
              bg: "green.500",
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
            transition="all 0.2s"
          >
            Dashboard
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;