import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";
import Error  from "./Components/Error";
import './App.css';
import {Routes,Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Movie/:id" element={<SingleMovie />}/>
        <Route path="*" element={<Error />}/>
        
      </Routes>
    
  );
}

export default App;
