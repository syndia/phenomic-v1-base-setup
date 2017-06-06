import React from 'react'
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

const BlogPost = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <h1>{ page.node.title }</h1>
        <BodyRenderer>{ page.node.body }</BodyRenderer>
      </article>
    )}
  </div>
)

const BlogPostContainer = createContainer(BlogPost, (props) => ({
  page: query({ collection: "posts", id: props.params.splat }),
}))

export default BlogPostContainer
