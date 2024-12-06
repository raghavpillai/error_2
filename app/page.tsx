"use client";

import { Box, Button, Container, Flex, Grid, Heading, Icon, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaStar, FaUsers, FaHome } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MotionBox = motion(Box);

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const greenColor = '#2C5530'; // forest green
  const redColor = '#8B0000'; // deep red
  const warmWhite = '#FDF5E6'; // warm white

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        as="section"
        backgroundImage="url('https://images.unsplash.com/photo-1576692155415-95f820a2c4c1')"
        backgroundSize="cover"
        backgroundPosition="center"
        minH="90vh"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0,0,0,0.5)"
        />
        <Container maxW="container.xl" position="relative">
          <Stack
            spacing={6}
            py={20}
            px={[4, 6, 8]}
            color="white"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            minH="90vh"
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h1"
                size="4xl"
                fontWeight="bold"
                lineHeight="1.2"
                mb={6}
              >
                Light Up Your Holidays
                <Text color={warmWhite}>with Professional Magic</Text>
              </Heading>
              <Text fontSize="xl" mb={8} maxW="800px">
                Transform your home into a winter wonderland with our professional Christmas lighting services.
              </Text>
              <Button
                size="lg"
                bg={greenColor}
                color="white"
                _hover={{ bg: redColor }}
                px={8}
                fontSize="lg"
              >
                Get Started Today
              </Button>
            </MotionBox>
          </Stack>
        </Container>
      </Box>

      {/* Social Proof Section */}
      <Box bg={warmWhite} py={16}>
        <Container maxW="container.xl">
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={8}
          >
            {[
              { icon: FaUsers, number: '1000+', text: 'Happy Customers' },
              { icon: FaHome, number: '5000+', text: 'Installations' },
              { icon: FaStar, number: '4.9', text: 'Average Rating' },
              { icon: FaSnowflake, number: '10+', text: 'Years Experience' },
            ].map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                textAlign="center"
              >
                <Icon as={stat.icon} w={12} h={12} color={greenColor} mb={4} />
                <Text fontSize="4xl" fontWeight="bold" color={greenColor}>
                  {stat.number}
                </Text>
                <Text fontSize="lg" color="gray.600">
                  {stat.text}
                </Text>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={16} bg={bgColor}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={12} color={greenColor}>
            Our Services
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            gap={8}
          >
            {[
              {
                title: 'Professional Installation',
                description: 'Expert installation of high-quality Christmas lights',
                image: 'https://images.unsplash.com/photo-1606946184955-a8cb11e66336'
              },
              {
                title: 'Custom Design',
                description: 'Personalized lighting designs to match your style',
                image: 'https://images.unsplash.com/photo-1607262807149-dfd4c39320a6'
              },
              {
                title: 'Maintenance & Removal',
                description: 'Full-season support and post-holiday takedown',
                image: 'https://images.unsplash.com/photo-1575673310554-42c896975c6e'
              }
            ].map((service, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />
                <Box p={6}>
                  <Heading size="md" mb={3} color={greenColor}>
                    {service.title}
                  </Heading>
                  <Text color="gray.600">{service.description}</Text>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonial Preview */}
      <Box bg={warmWhite} py={16}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={12} color={greenColor}>
            What Our Customers Say
          </Heading>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="xl"
              maxW="800px"
              mx="auto"
              textAlign="center"
            >
              <Text fontSize="lg" fontStyle="italic" mb={4}>
                "Bright Nights transformed our home into a magical Christmas wonderland! Their team was professional, efficient, and the results were stunning. We couldn't be happier!"
              </Text>
              <Text fontWeight="bold" color={greenColor}>
                Sarah Johnson
              </Text>
              <Text color="gray.600">Satisfied Customer</Text>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bg={greenColor}
        color="white"
        py={16}
        textAlign="center"
      >
        <Container maxW="container.xl">
          <Heading mb={4}>Ready to Transform Your Home?</Heading>
          <Text fontSize="xl" mb={8} maxW="600px" mx="auto">
            Book now to secure your spot for this holiday season and create unforgettable memories.
          </Text>
          <Button
            size="lg"
            bg={redColor}
            color="white"
            _hover={{ bg: 'red.700' }}
            px={8}
          >
            Schedule Your Installation
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}