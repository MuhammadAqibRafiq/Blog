import React from 'react'
import { Row, Col, Card, Container } from "react-bootstrap"
import Layout from './layout'
import Bio from './bio'
import Seo from './seo'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import './style.css'

const card = ({ data, location , posts }) => {

    // const siteTitle = data.site.siteMetadata?.title || `Title`
    // const posts = data.allContentfulPost.edges

    // console.log(posts)

    if (posts.length === 0) {
        return (
            <Layout location={location} >
                <Seo title="All posts" />
                <Bio />
                <p>
                    No blog posts found. Add markdown posts to "content/blog" (or the
                    directory you specified for the "gatsby-source-filesystem" plugin in
                    gatsby-config.js).
                </p>
            </Layout>
        )
    }

    return (
        <Container className='mt-5'>
            <Row xs={1} md={3} className="g-4  row">
                {posts.map((post, key) => {
                    const title = post.node.title || post.node.slug
                    return (

                        <Col className='col' key={key}>

                            <Card key={key} className="border-0 cards">

                                <Img className='cardimg' fluid={post.node.image.fluid} />

                                <Card.Body>
                                    <Link to={post.node.slug} className='link' itemProp="url">
                                        <Card.Title className="cardtitle" >{title}</Card.Title>
                                    </Link>
                                    <Card.Text>
                                        {post.node.subtitle}
                                    </Card.Text>


                                </Card.Body>
                                <Bio />
                            </Card>
                        </Col>
                    )

                })
                }
            </Row>
        </Container>

    )
}

export default card

