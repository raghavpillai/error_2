"use client"

import { Box, Grid, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'

// Dummy data for installation trends
const installationData = [
  {
    id: "installations",
    data: [
      { x: "Jan", y: 10 },
      { x: "Feb", y: 5 },
      { x: "Mar", y: 8 },
      { x: "Apr", y: 15 },
      { x: "May", y: 20 },
      { x: "Sep", y: 45 },
      { x: "Oct", y: 80 },
      { x: "Nov", y: 120 },
      { x: "Dec", y: 150 },
    ]
  }
]

// Dummy data for customer satisfaction
const satisfactionData = [
  {
    id: "Very Satisfied",
    label: "Very Satisfied",
    value: 65,
    color: "#2F855A"
  },
  {
    id: "Satisfied",
    label: "Satisfied",
    value: 25,
    color: "#48BB78"
  },
  {
    id: "Neutral",
    label: "Neutral",
    value: 8,
    color: "#9AE6B4"
  },
  {
    id: "Unsatisfied",
    label: "Unsatisfied",
    value: 2,
    color: "#FC8181"
  }
]

// Dummy data for revenue by service
const revenueData = [
  {
    service: "Basic Package",
    revenue: 45000,
  },
  {
    service: "Premium Package",
    revenue: 75000,
  },
  {
    service: "Custom Solutions",
    revenue: 95000,
  },
  {
    service: "Maintenance",
    revenue: 25000,
  }
]

// Dummy data for service area coverage
const coverageData = [
  {
    area: "Downtown",
    coverage: 85,
  },
  {
    area: "North Suburbs",
    coverage: 75,
  },
  {
    area: "South Suburbs",
    coverage: 65,
  },
  {
    area: "West End",
    coverage: 55,
  },
  {
    area: "East Side",
    coverage: 45,
  }
]

export default function Dashboard() {
  return (
    <Box p={8} maxW="1400px" mx="auto">
      <Heading mb={6} color="green.700">Business Dashboard</Heading>
      
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
        {/* Installation Trends */}
        <Card>
          <CardHeader>
            <Heading size="md" color="green.600">Installation Trends</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsiveLine
                data={installationData}
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 0, max: 'auto' }}
                curve="cardinal"
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                pointSize={10}
                pointColor="#2F855A"
                pointBorderWidth={2}
                pointBorderColor="#ffffff"
                colors={["#2F855A"]}
                lineWidth={3}
                enableGridX={false}
                enableArea={true}
                areaOpacity={0.1}
              />
            </Box>
          </CardBody>
        </Card>

        {/* Customer Satisfaction */}
        <Card>
          <CardHeader>
            <Heading size="md" color="green.600">Customer Satisfaction</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsivePie
                data={satisfactionData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ theme: 'background' }}
                enableArcLinkLabels={true}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
              />
            </Box>
          </CardBody>
        </Card>

        {/* Revenue by Service */}
        <Card>
          <CardHeader>
            <Heading size="md" color="green.600">Revenue by Service</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsiveBar
                data={revenueData}
                keys={['revenue']}
                indexBy="service"
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                padding={0.3}
                colors="#2F855A"
                borderColor={{ theme: 'background' }}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 45,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: value => `$${value / 1000}k`
                }}
                labelFormat={value => `$${value / 1000}k`}
              />
            </Box>
          </CardBody>
        </Card>

        {/* Service Area Coverage */}
        <Card>
          <CardHeader>
            <Heading size="md" color="green.600">Service Area Coverage</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsiveBar
                data={coverageData}
                keys={['coverage']}
                indexBy="area"
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                padding={0.3}
                colors="#48BB78"
                borderColor={{ theme: 'background' }}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 45,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: value => `${value}%`
                }}
                labelFormat={value => `${value}%`}
              />
            </Box>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  )
}