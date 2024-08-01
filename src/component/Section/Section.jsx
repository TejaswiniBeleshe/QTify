import React, { useEffect, useState } from "react";
import {Grid,Button,Stack, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { purple } from "@mui/material/colors";
import CardCompo from "../Card/Card";

import axios from 'axios';

function Section({l,r,url,setCheck='',check=''}){
    let [data,setData] = useState([]);
    const fetchData = async()=>{
        try{
           let respo = await axios.get(url);
           let data = respo.data;
           setData(data);
           console.log(data)
       }
       catch(err){
           alert('not found')
       }
   }
   useEffect(()=>{
    fetchData();

   },[])
    
    return(
        <Box sx={{padding:2}}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="space-between">
            <Typography sx={{color:'white',paddingTop:1}}>{l}</Typography>
            {
                l==='New Albums'?<Button sx={{color:'#34C94B',textTransform:'capitalize',fontSize:17}} onClick={()=>setCheck((prev)=>!prev)}>{check?'Collapse':'Show all'}</Button>:<Button sx={{color:'#34C94B',textTransform:'capitalize',fontSize:17}} >{r}</Button>
            }
            </Stack>
        <Grid container spacing={5} sx={{padding:1}} >
            {
                data.map((ele)=>{
                    return <Grid item xs={6} sm={1.7} key={ele.id}>
                    <CardCompo ele={ele} />
                  </Grid>
                })

            }
          
        </Grid>
      </Box>
        
    )
}
export default Section;