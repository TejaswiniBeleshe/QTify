import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Outlet/> */}
    </div>
  );
}

export default App;
