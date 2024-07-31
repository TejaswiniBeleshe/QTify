import './App.css';
import CardCompo from './component/Card/Card';
import Section from './component/Section/Section';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Outlet/> */}
      {/* <CardCompo/> */}
      <Section/>
    </div>
  );
}

export default App;
