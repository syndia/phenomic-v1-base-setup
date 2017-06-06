import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { createApp } from '@phenomic/preset-react-app/lib/client'

import BlogPostContainer from './components/BlogPostContainer'
import HomeContainer from './components/HomeContainer'

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer } />
    <Route path="/after/:after" component={ HomeContainer } />
    <Route path="/blog/*" component={ BlogPostContainer } collection="posts" />
  </Router>
))
