import React from 'react'
import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Typography variant="headline" gutterBottom>
      Welcome
    </Typography>
    <Typography paragraph>
      Paper can be used to build surface or other elements for your application.
    </Typography>
    <Typography paragraph>
      <Link to="/page-2/">Go to page 2</Link>
    </Typography>
  </Layout>
)

export default IndexPage
