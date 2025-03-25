import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Component/Header";
import { History } from "./Component/History";
import Home from "./Component/Home";

export default function App(){
  return(
    <>
   
   <Router>
   <Header/>
    <Routes>
<Route path="/Generate-Image With the help of AI" element={<Home/>}/>
<Route path="/" element={<History/>}/>
</Routes>

   </Router>
    </>
  )
}