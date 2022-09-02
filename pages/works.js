import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumblocardweb from '../public/images/works/locardweb.jpg'
import Layout from '../components/layouts/article'
import thumblocardadmin from '../public/images/works/locardadmin.jpg'


const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
                </Heading>
                <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                    <Section>
                        <WorkGridItem id="locardweb" title="Locardweb" thumbnail={thumblocardweb}>
                            A Mini marketplace for local business

                            (   Probably website has been taken down by the company.)
                            </WorkGridItem>

                    </Section>
                    <Section>
                    <WorkGridItem id="locardadmin" title="Locardadmin" thumbnail={thumblocardadmin}>
                            An admin panel for locardweb

                            (  Probably website has been taken down by the company)
                            </WorkGridItem>

                    </Section>
                </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works