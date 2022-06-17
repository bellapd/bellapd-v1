import { Heading, Stack, Text,  } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Layout from '../components/layouts/Page'

const About: NextPage = () => {
    return (
        <Layout>
            <Stack align="Center">
                <Heading size='3xl' fontSize='11rem' >About</Heading>
            </Stack>

            <Stack align="right" direction="row">
                <Text>
                   My name is Annabella Putri Dirgo, I'm a student at the National Tsing Hua University, Hsinchu, Taiwan. I'm currently working on projects related to web development using tools like React, Next-js, Golang, and Docker.
                 I'm also creating a content for my blog where I discuss projects that I'm working on and create tutorials to educate others.
                </Text>
            </Stack>           
        </Layout>
    )
}

export default About