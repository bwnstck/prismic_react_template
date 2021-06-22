import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration'
import { Help, Preview, NotFound } from './pages'
import Home from './pages/Home'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

/**
 * Main application componenet
 */
const App = (props) => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
  const repoName = repoNameArray[1]
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/help' component={Help} />
          <Route exact path='/preview' component={Preview} />
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
    <ReactQueryDevtools initialIsOpen={false} />

  </QueryClientProvider>
  )
}

export default App
