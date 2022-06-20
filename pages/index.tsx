import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import { Heading, VStack, Box} from '@chakra-ui/react'
import type { IPost } from '../types/post.type'

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <Layout>
            <VStack align="center" spacing={8}>
            <Heading as='h1' fontSize='9xl' maxW={{base:'m', md:'xl',lg:'2xl'}}>
                It's {' '}
                <Box
                    as='span'
                    bgGradient='linear-gradient(90deg,#0b6ec5,#5e49af,#f35815,#fed54a)'
                    bgClip='text'
                    _hover={{bgGradient:'linear-gradient(45deg, red, blue)'}}
                >
                    Annabella
                </Box>
            </Heading>
            </VStack>
            <Heading as="h2" size="md" mb={3}>Recent posts</Heading>
            <Posts posts={posts} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'blogs'))
    
    // iterate through all the files in /content/posts
    const posts = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'blogs', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })

    return {
        props: {
            posts
        }
    }
}

{/*  */}