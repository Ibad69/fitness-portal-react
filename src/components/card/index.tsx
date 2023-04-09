import React from 'react';
import 'react-slideshow-image/dist/styles.css'; 
import { Slide } from 'react-slideshow-image';
import Home from "../../assets/icons/home.png";
import CardImage from "../../assets/images/cardImage.jpg";
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
  // isArticle?: boolean
  title: string,
  desc: string,
  image: string,
  index: number
};

 const CardHeading = styled('h2')(({theme})=>({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",  
  overflow: "hidden",
   textOverflow: "ellipsis",
 }))
 const CardDescription = styled('span')(({theme})=>({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",  
  overflow: "hidden",
   textOverflow: "ellipsis",
}))

  
const Card: React.FC<Props> = (props: any) => {

  const navigate = useNavigate()

  //   const handleNews = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  // ) => {
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  // };

  // const handleNews = (val: string) => (event: any) => {
  //   // alert(val);
  // };

  return <div >
    <div  className="bg-gray-100 max-w-[370px] mx-auto rounded-md h-64 mt-5 container mx-auto shadow-lg rounded-lg hover:shadow-2xl transition duration-300" style={{backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div onClick={() => navigate('newssingle', {state:{index: props.index}})} className="flex flex-row items-end h-full w-full cursor-pointer">
        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
          <CardHeading className="text-base text-2xl font-bold leading-5 uppercase ">{props.title}</CardHeading>
          <div className="inline-flex items-center">
            <CardDescription className="capitalize font-base text-xs my-1 mr-1 ">{props.desc}</CardDescription>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Card;
