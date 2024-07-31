import React, { useEffect, useState } from "react";
import {Grid,Button,Stack, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { purple } from "@mui/material/colors";
import CardCompo from "../Card/Card";
import useFetch from "../customFetch/UseFetch";
import axios from 'axios';

function Section(){
    let [data,setData] = useState([]);
    const fetchData = async()=>{
        try{
           let respo = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
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
            <Typography sx={{color:'white',paddingTop:1}}>Top Albums</Typography>
            
            <Button sx={{color:'#34C94B',textTransform:'capitalize',fontSize:17}}>Collapse</Button>
      </Stack>
        <Grid container spacing={5} sx={{border:'1px solid red',padding:1}} >
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