import React from 'react'
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

import { Link } from "react-router"

const Home =  ({ posts }) => (
  <div>
    <h1>Home</h1>
    <ul>
      { posts && posts.node && posts.node.list &&
        posts.node.list.map((post) => (
          <li key={post.id}>
            <Link to={ `/blog/${ post.id }`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>
    <p>
      {
        posts && posts.node && posts.node.hasNextPage &&
        <Link to={ `/after/${ posts.node.next }`}>Older posts</Link>
      }
    </p>
  </div>
)

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({ collection: "posts", limit: 5, after: props.params.after }),
}))

export default HomeContainer