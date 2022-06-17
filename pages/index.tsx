import type { NextPage } from 'next'
import Layout from '../components/layouts/Page'
import { Heading, Stack } from '@chakra-ui/react'

const Home: NextPage = () => {
    return (
        <Layout>
            <Stack align="left">
                <Heading size='3xl' fontSize='80px'>It's</Heading>
                <Heading size='3xl' fontSize='80px'>Annabella</Heading>
            </Stack>
        </Layout>
    )
}

export default Home