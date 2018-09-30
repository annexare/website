import React from 'react'
import { Link } from 'gatsby'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import { Parallax } from 'react-scroll-parallax'

import Layout from '../components/layout'
import BannerImagePath from '../images/bg.gif'

const bannerStyles = {
  root: {
    backgroundColor: '#000',
    position: 'relative',
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
  },
  image: {
    width: '100vw',
    height: '150vh', // this should be dynamic, right now it's fixed based on a min max offset
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundPositionY: 0,
  },
  children: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const HeroBanner = withStyles(bannerStyles)(
  ({ classes, image, min, max, children }) => (
    <div className={classes.root}>
      <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </Parallax>
      <div className={classes.children}>
        {children}
      </div>
    </div>
  )
)

const IndexPage = ({ location }) => (
  <Layout>
    <HeroBanner
      min={'-60%'}
      max={'100%'}
      image={BannerImagePath}
    />
    <Paper style={{
      margin: '2em auto 200vh',
      maxWidth: 960,
      padding: '2em',
    }}>
      <Typography variant="headline" gutterBottom>
        Welcome
      </Typography>
      <Typography paragraph>
        Paper can be used to build surface or other elements for your application.
        {location.pathname}
      </Typography>
      <Typography paragraph>
        <Link to="/page-2/">Go to page 2</Link>
      </Typography>
    </Paper>
  </Layout>
)

export default IndexPage
