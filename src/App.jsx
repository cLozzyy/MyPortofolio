import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 


import Navbar from "./components/Navbar";
import IridescenceBackground from "./components/IridescenceBackground";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router basename="/MyPortofolio">
      <IridescenceBackground />
      <Navbar /> 
      <Routes>
        
        <Route path="/" element={<Home />} />

        
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;