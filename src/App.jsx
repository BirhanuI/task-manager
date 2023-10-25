import { useState } from "react";
import Navbar from "./components/navbar";
import WelcomePage from "./components/welcome-page";
import Login from "./components/login";
import Dashboard from "./components/admin-home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url('src/assets/contour-line.svg')] h-full bg-fixed">
      <Navbar />
    {/* <WelcomePage /> */}
    {/* <Login /> */}
    <Dashboard />
      </div>
  )
}

export default App;
