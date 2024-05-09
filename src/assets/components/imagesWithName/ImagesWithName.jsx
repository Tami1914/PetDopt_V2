import { useState } from "react";
import animalImages from "../../services/animalImages/animalImages";
import "./ImagesWithName.css";
import { useEffect } from "react";

function ImagesWithNames() {
  const [animal, setAnimal] = useState("all")
  const [animalsToShow, setAnimalsToShow] = useState([]); 

  const handleCarChange = (e) => {
    const selectedAnimal = e.target.value;
    setAnimal(selectedAnimal);

    if (selectedAnimal === "all") {
      setAnimalsToShow(animalImages);
    } else {
      let auxAnimals = animalImages.filter((a) => a.state === selectedAnimal)
      setAnimalsToShow([...auxAnimals]);
    }
  }

  useEffect(() => {
    setAnimalsToShow(animalImages);
  }, [])

  return (
    <>
      <form className="images-with-name-form">
        <select value={animal} onChange={handleCarChange}>
          <option value="all">-- Todos los valores --</option>
          <option value="Adoptado">Adoptado</option>
          <option value="Disponible">Disponible</option>
        </select>
      </form>
      
      <div className="animals-container">
        {
          animalsToShow.map((animalImage, index) => (
            <div className="image-list" key={index}>
              {animalImage.state && animalImage.state === "Disponible" ? (
                <div className="circle green"></div>
              ) : animalImage.state === "Adoptado" ? (
                <div className="circle red"></div>
              ) : (
                <div className="circle orange"></div>
              )}
              <img src={`/images/${animalImage.fileName}`} alt="imagen" />
              <span>{animalImage.name}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ImagesWithNames;