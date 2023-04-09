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

const DietPlans = (props: Props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const pages = [{label:' Home Workout Excercises', link:'/exerciseplans'}, {label:' Home Workout Excercises', link:'/dietplans'}, {label:' Home Workout Excercises', link:'/articles'}];

const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event:any) => {
  setAnchorElNav(event?event.currentTarget:null);
};
const handleOpenUserMenu = (event:any) => {
  setAnchorElUser(event?event.currentTarget:null);
};    
const [isLoading, setIsLoading] = React.useState(true);


const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};
useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  },500)
},[])
const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
  return (
    <Box>
 {isLoading?<Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", height:"100vh" }}>
    <CircularProgress color="inherit" size={80}/>
  </Box>:<Box> <Slider  isHome={false} />

  <Box >
      <SliderCard title='What is Keto Diet?' />
  </Box>
  <Box >
      <SliderCard title='Vegan Diet' />
  </Box>
  <Box >
      <SliderCard title='Low Card Diet' />
  </Box>
  </Box>
}
   </Box>
  )
}

export default DietPlans