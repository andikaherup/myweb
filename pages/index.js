import NextLink from 'next/link'
import { Button,Container, Box,Link, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500","whiteAlpha.200")} p={3} mb={6} align="center">
          Hello, I'm a full-stack developer. based in Tegal, Indonesia!
      </Box>
      <Box display={{ md:'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
            Andika Heru Pratama
        </Heading>
        <p>A Husband , Father , Tech Lover, Fullstack Engineer</p>
      </Box>
      <Box flexShrink={0} mt={{ base:4, md: 0 }} ml={{ md: 6 }} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/andika.jpg" alt="Profile Image" ></Image>
      </Box>
      </Box>

      <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
              Work
              </Heading>
           
              <Paragraph>A graduate informatics engineering student who passionate about using technology to empower people. Adept at motivating self and others. Aiming to become a highly-skilled software engineer. I don't like PHP
              <NextLink href="/works/">
                  <Link>InkDrop</Link>
              </NextLink>
              </Paragraph>
           
            <Box align="center" my={4}>
              <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">My Porfolio</Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection>
              <BioYear>1995</BioYear>
              Born in Padang Panjang, Sumatera Barat, Indonesia
            </BioSection>
            <BioSection>
              <BioYear>2019</BioYear>
              Completed the Bachelor Program of Informatic Engineering at Universitas Komputer Indonesia
            </BioSection>
            <BioSection>
              <BioYear>2019</BioYear>
              Work as Fullstack Developer at CLS Indo Jakarta
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              Work as Software Engineer at Moro.id
            </BioSection>
            <BioSection>
              <BioYear>2021 - now</BioYear>
              Work remotely as Fullstack Developer at Boom Town Ads Singapore
            </BioSection>
          </Section>
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              I love
              </Heading>
              <Paragraph>
                <Link href="">
                  Playing my Bass Guitar,{' '}
                </Link>
                <Link href="">
                  RPG/Moba Games, {' '}
                </Link>
                <Link href="">
                  Football
                </Link>
                <Link href="">
                  Machine Learning
                </Link>
              </Paragraph>
          </Section>
    </Container>
    </Layout>
  )
}

export default Page
