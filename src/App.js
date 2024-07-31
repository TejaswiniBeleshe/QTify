import './App.css';
import CardCompo from './component/Card/Card';
import Section from './component/Section/Section';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import {Divider, Tab} from '@mui/material';
import Top from './component/Topalbum/Top';
import New from './component/Newalbum/New';
import Swiper from "swiper";
import Swipe from './component/SWiper/Swipe';
import Songs from './component/Songs/Song';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Hero/>
      <Top/>
       <Divider sx={{borderColor:'#34C94B'}}/>
      <New/>
     
    </div>
    <Songs/>
    </>
  );
}

export default App;
