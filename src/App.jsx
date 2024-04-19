import { BrowserRouter, Route, Routes} from "react-router-dom";
import AnimalShelter from "./pages/animalShelter/AnimalShelter";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/AnimalShelter" element={<AnimalShelter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
