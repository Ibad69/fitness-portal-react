import { Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from '../../components/slider';
import SliderCard from '../../components/sliderCard';
import Services from './components/Services';

// type Props = {};
const Body = styled(Box)(({theme})=>({
  // paddingLeft:"30px",  
  // [theme.breakpoints.down('md')]: {
  //   paddingLeft:"0px"
  // },
 }))
const Home= () => {

  // const array =[1,2,3,4,5,6,7,8,9,10]
  // const removeArray = (arr) =>{
  //   const index = arr.indexOf(5);
  //   console.log("index", index)
  //   if(index > -1){
  //     arr.splice(index,1)
  //     return arr
  //   }
  // }
  // useEffect(async ()=> {
  //   return await axios({
  //     url: "https://api.thegraph.com/subgraphs/id/QmR6ycVkpXWGMM5y3b9mVNvAAcyFRndzt1yxW7RhYm4FFS",
  //     method: "post",
  //     data: {
  //       query: `
  //       {
  //         tokenDetails {
  //           id
  //           tokenMaxSupply
  //           holders {
  //             id
  //             address
  //             currentBalance
  //             allowance
  //           }
  //         }
  //       }  
  //     `,
  //     },
  //   }).then((result)=>{

  //     setRes(result.data)
  //   })
  // },[])
  return <Box>
  <Slider isHome={true} />
  <Body>
      <SliderCard title='Recent News' isArticle={false} />
      <div className="disclaimer">
        <p className='disclaimer_title'>DISCLAIMER</p>
        <p>If you have any Chronic Illness, Please see a doctor.</p>
      </div>
  </Body>
   </Box>
};

export default Home;