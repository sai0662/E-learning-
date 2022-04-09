import { Grid, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React , {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const carsoulData = [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGggCeG6sXQtCX7r2OuIGsCNSTGWkr6MWPQ&usqp=CAU",
    top:"Best Learning Platform",
    text:"There are many varaition passage slightly  suffered alteration in form by even some humour random words look",
    name:'Kevin C Meek',
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGggCeG6sXQtCX7r2OuIGsCNSTGWkr6MWPQ&usqp=CAU",
    top:"Best Learning Platform",
    text:"There are many varaition passage slightly  suffered alteration in form by even some humour random words look",
    name:'Kevin C Meek',
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGggCeG6sXQtCX7r2OuIGsCNSTGWkr6MWPQ&usqp=CAU",
    top:"Best Learning Platform",
    text:"There are many varaition passage slightly  suffered alteration in form by even some humour random words look",
    name:'Kevin C Meek',
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGggCeG6sXQtCX7r2OuIGsCNSTGWkr6MWPQ&usqp=CAU",
    top:"Best Learning Platform",
    text:"There are many varaition passage slightly  suffered alteration in form by even some humour random words look",
    name:'Kevin C Meek',
    
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGggCeG6sXQtCX7r2OuIGsCNSTGWkr6MWPQ&usqp=CAU",
    top:"Best Learning Platform",
    text:"There are many varaition passage slightly  suffered alteration in form by even some humour random words look",
    name:'Kevin C Meek',
    
  },
]



const Corosouel = () => {

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div style={{height:'70vh'}}>

        <Swiper
           onSwiper={setSwiperRef}
           spaceBetween={10}
           slidesPerView={2}
           centeredSlides={false}
           spaceBetween={0}
           autoplay={true}
           navigation={true}
          // pagination={true}
           pagination={{
           type: "fraction",
         }}
        style={{ height:'60vh',}}

         modules={[Pagination, Navigation]}
         >
          {
             carsoulData.map((mydata)=> (
              <SwiperSlide>
                 <Box sx={{ justifyContent:'center', backgroundColor:'#E0E0D8', display:'flex'}}>
                    <Box  style={{ margin:"20px"}}>
                       <img  height={300} width={300} style={{ borderRadius:"00%"}} src={mydata.image}></img>
                    </Box>
                 <Box style={{margin:'20px',backgroundColor:'#E0E0D8'}}>
                   <Typography style={{ fontSize:'40px', fontWeight:'500', color:'#0B2060'}} >{mydata.top}</Typography>
                    <Typography style={{fontSize:'18px'}}> {mydata.text} </Typography>
                      <Typography style={{ fontSize:'25px', marginTop:'50px'}} >{mydata.name}</Typography>
               </Box>
           </Box>
           </SwiperSlide>
           ))
         }
       
       

       </Swiper>

    </div>
  )
}

export default Corosouel


