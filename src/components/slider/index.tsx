import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'; 
import { Slide } from 'react-slideshow-image';
import Home from "../../assets/icons/home.png";
import HomeRunner from "../../assets/images/homeRunner.png";
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import { Button } from '@mui/material';

type MyType = {
  isHome: boolean,
  title: string,
  subHeading:string
}
// [key:string]: MyType;
type Props = {
  isHome:boolean
};

const slideImages = [
  'https://thegadgetflow.com/wp-content/uploads/2021/07/Golden-Concept-RSC44-active-Apple-Watch-case-01.jpg',
  'https://thegadgetflow.com/wp-content/uploads/2021/07/Golden-Concept-RSC44-active-Apple-Watch-case-01.jpg',
  'https://thegadgetflow.com/wp-content/uploads/2021/07/Golden-Concept-RSC44-active-Apple-Watch-case-01.jpg'
];
const CustomButton = styled('div')(({theme})=>({
  padding:"5px",
  background:"#15ad5d",
  borderRadius:"7px",
  fontSize:"15px",
  paddingInline:"20px",
  fontWeight:"600",
  placeSelf:"center",
}))
const HomeButton = styled('div')(({theme})=>({
  paddingInline:"15px",
  background:"#151515",
  borderRadius:"7px",
  alignItems:"center",
  paddingTop:"5px",
  marginLeft:"10px",
cursor:"pointer"
}))
const FlexDiv = styled('div')(({theme})=>({
 display:"flex"
}))
const SlideDiv = styled('div')(({theme})=>({
  height:"90vh"
 }))
const HomeIcon = styled('img')(({theme})=>({
 height:"22px",
 width:"25px",
//  paddingTop:"5px",
//  paddingBottom:"5px",
 background:"#151515",
 borderRadius:"7px",
}))
const MainSliderImage = styled('img')(({theme})=>({
  // height:"22px",
  // width:"25px",
 //  paddingTop:"5px",
 //  paddingBottom:"5px",
  // background:"#151515",
  // borderRadius:"7px",
  position:"absolute",
  top:"10%",
  left:"45%",
  [theme.breakpoints.down('md')]: {
    display:"none",
  },
  [theme.breakpoints.up('md')]: {
    display:"block",
  },

  // zIndex:"1000",
  height:"40rem",
 }))
const SliderHeading = styled('div')(({theme})=>({
fontSize:"5rem",
[theme.breakpoints.down('md')]: {
  fontSize:"2.5rem",
},
fontWeight:"900",
width:"60%",

 }))

 const SliderButton = styled(Button)<{backgroundColor:string}>(({theme, backgroundColor})=>({
fontSize:"1rem",
background:backgroundColor,
borderRadius:"5px",
color:"white",
marginRight:"15px",
fontWeight:"900",
paddingInline:"50px",
   }))

 const SliderInnerText = styled('div')(({theme})=>({
  fontSize:"1rem",
  fontWeight:"400",
  marginTop:"10px",
  width:"60%",
  opacity:"0.6",
   }))

 
 const SliderStrip = styled('div')(({theme})=>({
 height:"10px",
 borderRadius:"24px",
 background:"#ffffff",
width:"45%",

}))
const InnerSliderStrip = styled('div')(({theme})=>({
  height:"10px",
  borderRadius:"24px",
  background:"#151515",
 width:"50%",
 float:"right"
 
 }))
const Slider: React.FC<Props> = (props: Props) => {

    const navigate = useNavigate()
  return <div>
 <Slide easing="ease" indicators={true} arrows={false} className="relative">
          <div className="each-slide overflow-hidden"  style={{position:"relative"}}>
            <div style={{ minHeight:"45rem"}}>
              <div>
                <FlexDiv>
                  <CustomButton>FITNESS PORTAL FOR HEALTY LIVING</CustomButton>
                  <HomeButton><HomeIcon src={Home} /></HomeButton>
                </FlexDiv>
                <SliderHeading>
                {props.isHome?"The Future of Health is Now":"RANDOM EXERCISE NAME!"}
                </SliderHeading>
                <SliderStrip><InnerSliderStrip/></SliderStrip>
                <SliderInnerText>
                Exercise helps in the stimulation muscles development, joints and bones, as well as the lungs and heart. It helps children maintain a constant healthy weight.
                </SliderInnerText>
                {props.isHome&& <Box sx={{display:"flex", marginTop:"30px"}}>
                  <Box>
<SliderButton backgroundColor="#15ad5d" onClick={() => navigate('/news')}>NEWS</SliderButton>
                  </Box>
                  <Box>
                  <SliderButton backgroundColor="#242424" onClick={() => navigate('/caloriecounter')}>GET RCOMMENDATION</SliderButton>
                  </Box>
                </Box>}
                <MainSliderImage key="1" src={HomeRunner} />
              </div>
            </div>
          </div>
          <div className="each-slide overflow-hidden"   style={{position:"relative"}}>
            <div style={{ minHeight:"45rem"}}>
              <div>
                <FlexDiv>
                  <CustomButton>FITNESS PORTAL FOR HEALTY LIVING</CustomButton>
                  <HomeButton><HomeIcon src={Home} /></HomeButton>
                </FlexDiv>
                <SliderHeading>
                {props.isHome?"Health is beauty and fitness is its key":"RANDOM EXERCISE NAME!"}
                </SliderHeading>
                <SliderStrip><InnerSliderStrip/></SliderStrip>
                <SliderInnerText>
                A person stays happier, being fit and healthy. A healthy and fit person is less prone to chronic diseases. In any pressure situation, a healthy mind reacts better. 
                </SliderInnerText>
               {props.isHome&& <Box sx={{display:"flex", marginTop:"30px"}}>
                  <Box>
                  <SliderButton backgroundColor="#15ad5d" onClick={() => navigate('/news')}>NEWS</SliderButton>
                  </Box>
                  <Box>
                  <SliderButton backgroundColor="#242424" onClick={() => navigate('/caloriecounter')}>GET RCOMMENDATION</SliderButton>

                  </Box>
                </Box>}
                <MainSliderImage src={HomeRunner} />
              </div>
            </div>
          </div>
          <div className="each-slide overflow-hidden"   style={{position:"relative"}}>
            <div style={{ minHeight:"45rem"}}>
              <div>
                <FlexDiv>
                  <CustomButton>FITNESS PORTAL FOR HEALTY LIVING</CustomButton>
                  <HomeButton><HomeIcon src={Home} /></HomeButton>
                </FlexDiv>
                <SliderHeading>
                {props.isHome?"Give your tomorrows a better and fitter start.":"RANDOM EXERCISE NAME!"}
                </SliderHeading>
                <SliderStrip><InnerSliderStrip/></SliderStrip>
                <SliderInnerText>
                    Exercise is important for your overall stamina improvement. If you think you get tired very easily, exercise can help improve your physical strength and increase your energy level.
                </SliderInnerText>
                {props.isHome&& <Box sx={{display:"flex", marginTop:"30px"}}>
                  <Box>
                  <SliderButton backgroundColor="#15ad5d" onClick={() => navigate('/news')}>NEWS</SliderButton>
                  </Box>
                  <Box>
                  <SliderButton backgroundColor="#242424" onClick={() => navigate('/caloriecounter')}>GET RCOMMENDATION</SliderButton>
                  </Box>
                </Box>}
                <MainSliderImage src={HomeRunner} alt="image of Man" />
              </div>
            </div>
          </div>
          {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div> */}
        </Slide>
  </div>;
};

export default Slider;
