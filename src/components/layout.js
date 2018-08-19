import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from './themes'

import Header from './header'

import 'typeface-roboto'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Annexare Studio provides qualitative Web and Software solutions.' },
            { name: 'keywords', content: 'annexare, development, studio, web, software, аннексар, разработка, розробка, студия, студія' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        
        <CssBaseline />

        <Header title={data.site.siteMetadata.title} />
        
        <MuiThemeProvider theme={lightTheme}>
          <Paper style={{
            margin: '64px auto 200vh',
            maxWidth: 960,
            padding: '2em',
          }}>
            {children}
          </Paper>
        </MuiThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
