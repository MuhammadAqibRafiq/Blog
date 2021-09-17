import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from '../components/frontpage'
import Footer from '../components/footer'


const BlogPostContentfulTemplate = ({ data, location }) => {

  const post = data.contentfulPost
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <div >
      <Navbar />
      <Layout location={location} >
        <Seo
          title={post.title}
          description={post.subtitle}
        />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <Img fluid={post.image.fluid} />
          <header>
            <h1 itemProp="headline">{post.title}</h1>
            {/* <p>{post.frontmatter.date}</p> */}
          </header>
          <section
            // dangerouslySetInnerHTML={{ __html: post.content.raw }}
            itemProp="articleBody"
          >
            {documentToReactComponents(JSON.parse(post.content.raw))}
          </section>

          <hr />
          <footer>

            <Bio />
          </footer>
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >

            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ←{previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
      <Footer/>
    </div>

  )
}



export default BlogPostContentfulTemplate

export const pageQuery = graphql`

query ContentfulBlogPostBySlug($slug:String!) {
  site {
    siteMetadata {
      title
    }
  }
  contentfulPost(slug:{eq:$slug}){
    title
    subtitle 
    image{
      fluid{
        ...GatsbyContentfulFluid
      }
    }
    content{
     raw
    }

  }
}
`







