import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
const App= () =>{
  const [sidebarOpen,setsidebarOpen]= useState(false);
  
  const openSidebar=()=>{
    setsidebarOpen(prev => !prev);
  }
  const closeSidebar=()=>{
    setsidebarOpen(prev => !prev);
  }

  const onmouseoveraction = () => {
    setsidebarOpen(true);
  }
  const onmouseoutaction = () => {
    setsidebarOpen(false);
  }
  return (
    <div className="App-header">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} onMouse={onmouseoveraction} onMouseOut={onmouseoutaction}/>
       
    </div>
  );
}

export default App;
