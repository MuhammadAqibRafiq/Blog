const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)

  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  )

 
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulPost.edges

  if (posts.length > 0) {
 
    posts.forEach((post, index) => {
      const previousPost = index === 0 ? null : posts[index - 1].node
      const nextPost = index === posts.length - 1 ? null : posts[index + 1].node


      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previousPost,
          nextPost,
        },
      })
    })
  }
}
