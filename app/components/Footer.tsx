'use client'

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.200', 'gray.200')}
      mt="auto"
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }}
          spacing={8}
          mb={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                fontSize={'2xl'}
                fontWeight="bold"
                bgGradient="linear(to-r, red.500, green.500)"
                bgClip="text"
              >
                Bright Nights Christmas Lighting
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              Bringing holiday magic to your home with professional Christmas light installation
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Link href={'#'} isExternal>
                <Icon as={FaFacebook} w={6} h={6} _hover={{ color: 'blue.400' }} />
              </Link>
              <Link href={'#'} isExternal>
                <Icon as={FaTwitter} w={6} h={6} _hover={{ color: 'blue.400' }} />
              </Link>
              <Link href={'#'} isExternal>
                <Icon as={FaInstagram} w={6} h={6} _hover={{ color: 'pink.400' }} />
              </Link>
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Contact Information
            </Text>
            <Link href={'tel:555-123-4567'}>Phone: (555) 123-4567</Link>
            <Link href={'mailto:info@brightnights.com'}>Email: info@brightnights.com</Link>
            <Text>
              Address: 123 Holiday Lane
              <br />
              North Pole, AK 99705
            </Text>
          </Stack>

          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Service Areas
            </Text>
            <Text>North Phoenix</Text>
            <Text>Scottsdale</Text>
            <Text>Paradise Valley</Text>
            <Text>Cave Creek</Text>
            <Text>Carefree</Text>
          </Stack>
        </SimpleGrid>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.700', 'gray.700')}
          pt={8}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify={'space-between'}
            align={'center'}
          >
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Bright Nights Christmas Lighting. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6} mt={{ base: 4, md: 0 }}>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
            </Stack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}