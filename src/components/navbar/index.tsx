import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from "react-router-dom";

function HideOnScroll(props:any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
 const NavBar:React.FC = (props) =>{

  const pages = [{label:'Home', link:'/'}, {label:'Diseases', link:'/diseases'}, {label:'News', link:'/news'}, {label:'Get Recommendation', link:'/caloriecounter'}, {label:'Faqs', link:'/faq'}];

const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);
const isLoggedIn = localStorage.getItem('isLoggedIn')

const handleOpenNavMenu = (event:any) => {
  setAnchorElNav(event?event.currentTarget:null);
};
const handleOpenUserMenu = (event:any) => {
  setAnchorElUser(event?event.currentTarget:null);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
}

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{background:"black"}}>
          <Toolbar >
          <Link to={"/"}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <FitnessCenterIcon className="h-10 w-16"/>
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link}>
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page.label}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link to={"/"}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <FitnessCenterIcon className="h-10 w-16"/>
          </Typography>
          </Link>
          <Box sx={{flexGrow:1,display: { xs: 'none', md: 'flex' }, alignItems:"center"}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"right" }}>
            {pages.map((page) => (
              // <Box>
              <Link to={page.link}>
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , textTransform:"capitalize", opacity:"0.7", letterSpacing:"2px"}}
              >
                {page.label}
              </Button>
              </Link>
              // </Box>
            ))}
             {isLoggedIn !== 'true' && <Link to={"/login"}>
               <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , textTransform:"capitalize", opacity:"0.7", letterSpacing:"2px"}}
              >
                Login
              </Button>
              </Link>}
              {isLoggedIn !== 'true' && <Link to={"/register"}>
               <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , textTransform:"capitalize", opacity:"0.7", letterSpacing:"2px"}}
              >
               Register
              </Button>
              </Link>}
              {isLoggedIn === 'true' && <Button
                onClick={handleLogout}
                sx={{ my: 2, color: 'white', display: 'block' , textTransform:"capitalize", opacity:"0.7", letterSpacing:"2px"}}
              >
               Logout
              </Button>}
             
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Box>
        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
 
        </Box>
      </Container>
    </React.Fragment>
  );
}


export default NavBar;