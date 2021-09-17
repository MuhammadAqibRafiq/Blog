import * as React from "react"
import { graphql } from "gatsby"
import Frontpage from "../components/frontpage"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/card'
import Carousel from '../components/carousel'
import Footer from "../components/footer"

const BlogIndex = ({ data, location }) => {
  const posts = data.allContentfulPost.edges
  
    // console.log(posts)

  return (
    <div>
      <Frontpage />
      <Carousel data={data}/>
      <Card data={data} posts={posts}/>
      <Footer/>
    </div>
  )
}

export default BlogIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost  {
      edges{
        node{
          title
          author
          subtitle
          slug
          image{   
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    
  }
`


