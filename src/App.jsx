import { BrowserRouter, Route, Routes} from "react-router-dom";
import AnimalShelter from "./pages/animalShelter/AnimalShelter";
import Home from "./pages/home/Home";
import Adoption from "./pages/adoption/Adoption";
import Terms from "./pages/terms/Terms";
import Cookies from "./pages/cookies/Cookies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/AnimalShelter" element={<AnimalShelter/>}/>
          <Route path="/Adoption" element={<Adoption/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/cookies" element={<Cookies/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
