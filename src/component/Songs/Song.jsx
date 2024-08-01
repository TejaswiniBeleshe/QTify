import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';
import Section from '../Section/Section';
import { Card, Grid ,Stack,Typography} from '@mui/material';
import CardCompo from '../Card/Card';

export default function Songs(){
  const [value, setValue] = React.useState('blues');
  const [respo,setRespo] = React.useState([]);
  // const [t2,setT2] = useState([]);
  // const [t3,setT3] = useState([]);
  // const [t4,setT4] = useState([]);
  // const [t5,setT5] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  let fetchData = async()=>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/songs');
    setRespo(res.data);
    console.log(res.data)
  }
  useEffect(()=>{
    fetchData();
  },[]);
  console.log(value)
  // useEffect(()=>{
  //   let arr2=[],arr3=[],arr4=[],arr5=[];
  //   for(let i=0;i<respo.length;i++){
  //       if(respo[i].genre.label === 'Jazz') arr2.push(respo[i]);
  //       else if(respo[i].genre.label === 'Rock') arr3.push(respo[i]);
  //       else if(respo[i].genre.label === 'Pop')arr4.push(respo[i]);
  //       else arr5.push(respo[i])
  //   }
  //   setT2(arr2);
  //   setT3(arr3);
  //   setT4(arr4);
  //   setT5(arr5);

  // },[respo]);
  // console.log(t2,t3,t4,t5)
  return (

    <Box sx={{ width: '100%', typography: 'body1',padding:2 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="start">
            <Typography sx={{color:'white',paddingTop:1}}>Songs</Typography>
            </Stack>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}  TabIndicatorProps={{
             style: {
                backgroundColor: "#34C94B",
                color:'#FFFFFF'
              }
            }}
            aria-label="lab API tabs example" >
            <Tab label="All" value="all" sx={{color:'#FFFFFF'}}/>
            <Tab label="Jazz" value="jazz" sx={{color:'#FFFFFF'}}/>
            <Tab label="Rock" value="rock" sx={{color:'#FFFFFF'}} />
            <Tab label="Pop" value="pop" sx={{color:'#FFFFFF'}}/>
            <Tab label="Blues" value="blues" sx={{color:'#FFFFFF'}}/>
          </TabList>
        </Box>
        <TabPanel value='all'>
        <Grid container spacing={5} sx={{padding:1}} >
           {
                respo.map((ele)=>{
                    return <Grid item xs={6} sm={1.7} key={ele.id}>
                        <CardCompo ele={ele}/>
                    </Grid>

                })
            }

        </Grid>
            
        </TabPanel>
        <TabPanel value={value}>
            <Grid container spacing={5} sx={{padding:1}} >
            {
               respo.map((ele)=>{
                if(ele.genre.key === value){
                   return <Grid item xs={6} sm={1.7} key={ele.id}>
                    <CardCompo ele={ele}/>
                </Grid>
                }return '';
               }) 
            }
            </Grid>
        </TabPanel>
        {/* <TabPanel value="2">
            
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}