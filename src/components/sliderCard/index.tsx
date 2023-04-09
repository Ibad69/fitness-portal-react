import { useNavigate } from 'react-router-dom';
import { Button, styled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Card from '../card';
import { Slide } from 'react-slideshow-image';
import instance from '../../api'


type Props = {
    title: string,
    isArticle?: boolean
}

const NewsHeading = styled('div')(({theme})=>({
fontSize:"30px",
color:"#fff",
fontWeight:"800",
paddingLeft:"30px",
   }))
   const ViewMoreButton = styled(Button)<{backgroundColor:string}>(({theme, backgroundColor})=>({
    fontSize:"1rem",
    fontFamily:"Montserrat",
    background:backgroundColor,
    borderRadius:"5px",
    color:"white",
    marginRight:"15px",
    fontWeight:"900",
    paddingInline:"50px",
    marginLeft:"auto",
    marginTop:"10px",
  }))

const SliderCard = ({title, isArticle}: Props) => {

  const [data, setData] = useState<any[]>([])
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate()

  useEffect(() => {
    const customPosts = 'user/getCustomPosts'
    const randomPosts = 'user/getRandomPosts'
    instance.post(isLoggedIn === 'true' ? customPosts : randomPosts)
    .then(res => {
      setData(res.data.data.successResult)
    })
  }, [])

  // const handleNews = (e: any) => {
  //   console.log('dsasa');    
  // }

  // const handleNews = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  // ) => {
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  // };
  

  return (
    <div>
        <Box>
            <NewsHeading>
                {title}
            </NewsHeading>
             <Slide easing="ease" indicators={false} arrows={true} className="relative ">
              <div className="slider-news each-slide overflow-hidden flex flex-wrap justify-center"  style={{position:"relative", display:"flex"}}>
                <Card 
                  title={data[0]?.caption}
                  desc={data[0]?.title}
                  image={data[0]?.headings[0].mediaUrl}
                  // onClick={() => navigate('newssingle', {state: {index: 0}})}
                  // onClick={handleNews}
                  index={0}
                />
                <Card 
                  title={data[1]?.caption}
                  desc={data[1]?.title}
                  image={data[1]?.headings[0].mediaUrl}
                  index={1}
                />
                <Card 
                  title={data[2]?.caption}
                  desc={data[2]?.title}
                  image={data[2]?.headings[0].mediaUrl}
                  index={2}
                />
              </div>
              {/* <div className="each-slide overflow-hidden flex flex-wrap justify-center"   style={{position:"relative", display:"flex"}}>
              
              <Card isArticle={isArticle} />
              <Card isArticle={isArticle} />
              <Card isArticle={isArticle} />
              </div>
              <div className="each-slide overflow-hidden flex flex-wrap justify-center"   style={{position:"relative", display:"flex"}}>
            
              <Card isArticle={isArticle} />
              <Card isArticle={isArticle} />
              <Card isArticle={isArticle} />
              </div> */}
            </Slide>
            <Box className="text-center">
            <ViewMoreButton className='mb-5 mt-5' backgroundColor="#15ad5d" onClick={() => navigate('/news')}>
                View More
            </ViewMoreButton>
            </Box>
        </Box>
    </div>
  )
}

export default SliderCard;