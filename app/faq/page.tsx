"use client"

import {
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
} from "@chakra-ui/react"

export default function FAQPage() {
  return (
    <Container maxW="4xl" py={12}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            color="green.700"
            fontWeight="bold"
          >
            Frequently Asked Questions
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Find answers to common questions about our Christmas lighting services
          </Text>
        </Box>

        <Accordion allowMultiple>
          {/* Installation Process */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  How does the installation process work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our professional team handles everything from start to finish. We begin with a consultation to understand your vision, then create a custom design plan. On installation day, our trained technicians will carefully install all lights and decorations, test everything, and ensure you're completely satisfied with the result.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  How long does installation typically take?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Installation time varies depending on the size of your property and the complexity of the design. Most residential installations take 2-4 hours, while larger properties may require a full day. We'll provide you with a specific time estimate during your consultation.
            </AccordionPanel>
          </AccordionItem>

          {/* Pricing & Packages */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  What's included in your pricing?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our pricing includes professional installation, all necessary materials (lights, clips, extension cords), maintenance throughout the season, and removal after the holidays. We also provide storage solutions for your lights during the off-season. Visit our pricing page for detailed package information.
            </AccordionPanel>
          </AccordionItem>

          {/* Maintenance & Support */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  What happens if lights stop working during the season?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We offer 24/7 support throughout the holiday season. If any lights malfunction, simply contact us, and we'll send a technician to fix the issue at no additional cost. Our goal is to keep your display looking perfect throughout the entire season.
            </AccordionPanel>
          </AccordionItem>

          {/* Scheduling & Timing */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  When should I schedule my installation?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We recommend booking your installation at least 4-6 weeks before your desired installation date. Our peak season runs from early November through early December. Early booking ensures you get your preferred installation date and allows time for proper planning and design.
            </AccordionPanel>
          </AccordionItem>

          {/* Removal & Storage */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  When do you remove the lights?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We typically schedule removal in January, after the holiday season. You can choose your preferred removal date during the initial consultation. Our team will carefully remove all lights and decorations, leaving your property exactly as we found it.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50", color: "green.700" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Do you offer storage solutions?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes! We offer professional storage services for all our customers. We'll carefully package and store your lights in our climate-controlled facility, ensuring they're well-maintained and ready for next season. This service is included in our Premium and Custom packages.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box textAlign="center" mt={8}>
          <Text color="gray.600">
            Still have questions? Contact us at (555) 123-4567 or email
            support@brightnights.com
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}