import { useState } from "react";
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/navbar";
import WelcomePage from "./components/welcome-page";
import Login from "./components/login";
import Dashboard from "./components/admin-home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url('src/assets/contour-line.svg')] h-full bg-fixed">
      <Navbar />
    
    <Routes>
      <Route path="/" element={<WelcomePage />}/>
      <Route path="/login" element={ <Login />}/>
      <Route path="/admin/dashboard/*" element={ <Dashboard />}/>
    </Routes>
   
    
      </div>
  )
}

export default App;
