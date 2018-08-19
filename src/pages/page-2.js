import React from 'react'
import { Link } from 'gatsby'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Paper style={{
      margin: '80px auto 200vh',
      maxWidth: 960,
      padding: '2em',
    }}>
      <Typography variant="headline" gutterBottom>
        Hi from the second page
    </Typography>
      <Typography paragraph>
        Welcome to page 2
    </Typography>
      <Typography paragraph>
        <Link to="/">Go back to the homepage</Link>
      </Typography>
    </Paper>
  </Layout>
)

export default SecondPage
