import React, { useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swipe.css';
import { Navigation } from 'swiper/modules';
import {Box,Card,Grid,Stack,Typography,Button} from '@mui/material';
import Section from "../Section/Section";
import axios from 'axios';
import CardCompo from '../Card/Card';

export default function Swipe(){
  let [check,setCheck] = useState(false);
  let [respo,setRespo] = useState([]);
  let [arr,setArr] = useState([]);

  let fetchData = async()=>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
    setRespo(res.data);
  }
  useEffect(()=>{
    fetchData();
    console.log(respo)
  },[])
    let dataArr= ()=>{
        let arr = [],res=[],c=0;
        for(let i=1;i<=respo.length;i++){
        if(c===4){
            res.push(arr);
            arr=[];
            c=0
        }
        arr.push(respo[i]);
        ++c;
    }
    res.push(arr);
    console.log(res);
    setArr(res);
    }
    useEffect(()=>{
        dataArr();
    },[respo])
  return (
    <> 
    
      {check?
      <Section l="New Albums" r="collapse" url="https://qtify-backend-labs.crio.do/albums/new"  setCheck={setCheck} check={check}/>
      :
      <Box sx={{padding:2}}><Stack spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="space-between">
      <Typography sx={{color:'white',paddingTop:1}}>New Album</Typography>
          <Button sx={{color:'#34C94B',textTransform:'capitalize',fontSize:17}} onClick={()=>setCheck((prev)=>!prev)}>{check?'Collapse':'Show all'}</Button>
      </Stack>
      <Grid container spacing={5} sx={{padding:1}} >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
        arr.map((ele)=>{
            return <SwiperSlide>
            {
                ele.map((ele)=>{
                    if(ele=== undefined){
                        return '' ;
                    }
                   return <Grid item key={ele.id}>
                        <CardCompo ele={ele}/>
                    </Grid>  
                })
            }
            </SwiperSlide>

        })
       }
        
      </Swiper>
      </Grid></Box>
      }
    </>
  );
}