"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Card,
  CardBody,
  Avatar,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    review: "Bright Nights transformed our home into a magical winter wonderland! The professional installation team was punctual, friendly, and paid attention to every detail. Our neighbors keep asking who did our lights!",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    review: "Second year using their services and couldn't be happier. They handle everything from installation to maintenance and removal. The premium package was worth every penny for the stunning display we got.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    review: "The custom design they created for our Victorian home was breathtaking. They perfectly highlighted our architecture while maintaining a classic, elegant holiday feel. Exceptional service!",
    rating: 5,
  },
  {
    name: "David Wilson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    review: "What impressed me most was their attention to safety and quality. Every connection was weatherproofed, and they even helped program our timer system. Best Christmas lighting service in the area!",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    review: "From the initial consultation to the final installation, the team was professional and creative. They worked within our budget to create something truly spectacular. Our kids were absolutely amazed!",
    rating: 5,
  },
  {
    name: "Robert Chen",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    review: "The maintenance service throughout the season was fantastic. When we had a small issue with one section, they were out the next day to fix it. That's what I call customer service!",
    rating: 5,
  }
];

export default function TestimonialsPage() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={16}>
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color="green.700"
            fontWeight="bold"
          >
            What Our Customers Say
          </Heading>
          <Text
            fontSize="xl"
            textAlign="center"
            color="gray.600"
            maxW="800px"
          >
            Discover why hundreds of homeowners trust us to bring holiday magic to their homes each season.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              bg={cardBg}
              shadow="xl"
              borderRadius="lg"
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-5px)" }}
            >
              <CardBody>
                <VStack spacing={4} align="start">
                  <HStack spacing={4} width="full">
                    <Avatar
                      size="lg"
                      name={testimonial.name}
                      src={testimonial.image}
                    />
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold" fontSize="lg">
                        {testimonial.name}
                      </Text>
                      <HStack spacing={1}>
                        {Array(testimonial.rating)
                          .fill("")
                          .map((_, i) => (
                            <Icon
                              key={i}
                              as={StarIcon}
                              color="red.500"
                              w={4}
                              h={4}
                            />
                          ))}
                      </HStack>
                    </VStack>
                  </HStack>
                  <Text color="gray.600" fontSize="md" lineHeight="tall">
                    "{testimonial.review}"
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}