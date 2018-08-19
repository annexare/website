import React from 'react'
import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Typography variant="headline" gutterBottom>
      Hi from the second page
    </Typography>
    <Typography paragraph>
      Welcome to page 2
    </Typography>
    <Typography paragraph>
      <Link to="/">Go back to the homepage</Link>
    </Typography>
  </Layout>
)

export default SecondPage
