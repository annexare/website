import React, { Component } from 'react'
import { Link } from 'gatsby'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuIcon from '@material-ui/icons/Menu'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { darkTheme, lightTheme } from './themes'

const headerStyle = {
  transparent: {
    background: 'rgba(0, 0, 0, .9)',
  },
  minHeightTransition: {
    transition: 'all .2s ease',
  }
}

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobileOpen: false,
      isOnTop: true,
    }
  }
  handleDrawerToggle = () => {
    this.setState({ isMobileOpen: !this.state.isMobileOpen })
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleColorChange)
  }
  getScrollBreakdownOffset = () => {
    if (window.location.pathname === '/') {
      return window.innerHeight * 0.71;
    }

    return 80;
  }
  handleColorChange = () => {
    setTimeout(() => this.setState({
      isOnTop: window.pageYOffset < this.getScrollBreakdownOffset()
    }), 0)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleColorChange)
  }
  render() {
    const {
      classes,
      rightLinks,
      title,
    } = this.props

    const { isOnTop } = this.state
    const homeButton = <Button component={Link} to="/">{title}</Button>
    const defaultButton = <Button component={Link} to="/page-2">Page 2</Button>

    return (
      <MuiThemeProvider theme={isOnTop ? darkTheme : lightTheme}>
        <AppBar color="default" className={isOnTop ? classes.transparent : null}>
          <Toolbar
            className={classes.minHeightTransition}
            disableGutters
            variant={isOnTop ? 'regular' : 'dense'}
          >
            {homeButton}
            <Hidden xsDown>
              {rightLinks || defaultButton}
            </Hidden>
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="Open menu"
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Hidden smUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={this.state.isMobileOpen}
              onClose={this.handleDrawerToggle}
            >
              <div>
                {rightLinks || defaultButton}
              </div>
            </Drawer>
          </Hidden>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(headerStyle)(Header)
