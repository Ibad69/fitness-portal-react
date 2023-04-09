import { Box, Button, styled } from "@mui/material";
import React from "react";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SpaIcon from '@mui/icons-material/Spa';

type Props = {};
const ServicesHeading = styled("div")(({ theme }) => ({
  fontSize: "30px",
  color: "#fff",
  fontWeight: "800",
  textAlign: "center",
}));
const ServiceCard = styled("div")(({ theme }) => ({
  fontSize: "20px",
  color: "#fff",
  fontWeight: "800",
  background: "#151515",
  textAlign: "center",
}));
const MoreServicesButton = styled(Button)<{backgroundColor:string}>(({theme, backgroundColor})=>({
  fontSize:"1rem",
  fontFamily:"Montserrat",
  background:backgroundColor,
  borderRadius:"5px",
  color:"white",
  marginRight:"15px",
  fontWeight:"900",
  paddingInline:"50px",
}))
function Services({}: Props) {
  return (
    <Box sx={{ padding: "40px 0px" }}>
      <ServicesHeading>Our Services</ServicesHeading>
      <Box>
        <div className="flex flex-wrap mt-8">
        <div className="max-w-[370px] mx-auto ">
            <ServiceCard  className="rounded overflow-hidden mb-8 h-92 w-full">
              <div
                className="relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
               
                <div className="z-10 p-2" style={{color:"#242424"}}>
                  <FitnessCenterIcon style={{fontSize:"6rem"}}/>
                </div>
                <div className="z-10 p-1 text font-normal leading-none text-center text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit enim totam possimus rem. Totam, quis!
                </div>
              </div>
            </ServiceCard>
          </div>
          <div className="max-w-[370px] mx-auto ">
            <ServiceCard  className="rounded overflow-hidden mb-8 h-92 w-full">
              <div
                className="relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
               
                <div className="z-10 p-2" style={{color:"#242424"}}>
                <DirectionsRunIcon style={{fontSize:"6rem"}} />
                </div>
                <div className="z-10 p-1 text font-normal leading-none text-center text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit enim totam possimus rem. Totam, quis!
                </div>
              </div>
            </ServiceCard>
          </div>
          <div className="max-w-[370px] mx-auto ">
            <ServiceCard  className="rounded overflow-hidden mb-8 h-92 w-full">
              <div
                className="relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
               
                <div className="z-10 p-2" style={{color:"#242424"}}>
                 <SpaIcon style={{fontSize:"6rem"}} />
                </div>
                <div className="z-10 p-1 text font-normal leading-none text-center text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit enim totam possimus rem. Totam, quis!
                </div>
              </div>
            </ServiceCard>
          </div>
        </div>
        <Box sx={{textAlign:"right"}}>
        <MoreServicesButton backgroundColor="#15ad5d">View More</MoreServicesButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
