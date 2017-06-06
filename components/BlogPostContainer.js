import React from 'react'
import Head from "react-helmet"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

const BlogPost = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <Head>
          <title>{ page.node.title }</title>
          <meta name="description" content={ "" /* page.node.body.slice(0, 50)*/ } />
        </Head>
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
