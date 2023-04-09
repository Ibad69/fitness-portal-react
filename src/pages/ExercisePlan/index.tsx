import { Box, Button, CircularProgress, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Slider from '../../components/slider'
import SliderCard from '../../components/sliderCard'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/system';

type Props = {}

const WorkoutHeading = styled('div')(({theme})=>({
    fontSize:"20px",
    color:"#fff",
    fontWeight:"800",
       }))
const ExercisePlan = (props: Props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);


    const pages = [{label:' Home Workout Excercises', link:'/exerciseplans'}, {label:' Home Workout Excercises', link:'/dietplans'}, {label:'Calorie Counter', link:'/caloriecounter'}];

const [anchorElUser, setAnchorElUser] = React.useState(null);

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  },500)
},[])
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
  return (
    <Box>
      
  {(isLoading)?<Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", height:"100vh" }}>
    <CircularProgress color="inherit" size={80}/>
  </Box>:<Box><Slider  isHome={false} />
  <Box className="flex px-8">
      <WorkoutHeading>
Workout Videos
      </WorkoutHeading>
      <Box className="ml-auto">

      <Box>
            <Button
            style={{background:"#151515", color:"#c3c2c2"}}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              Home Workout Excercises <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <Link to={page.link}>
                <MenuItem key={page.label} value={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page.label}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
      </Box>

  </Box>

  <Box>
      <SliderCard title='Upper Body:' />
  </Box>
  <Box>
      <SliderCard title='Lower Body:' />
  </Box>
  <Box>
      <SliderCard title='Yoga:' />
  </Box></Box>}

   </Box>
  )
}

export default ExercisePlan