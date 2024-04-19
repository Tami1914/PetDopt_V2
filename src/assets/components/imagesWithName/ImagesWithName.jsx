import animalImages from "../../services/animalImages/animalImages";
import "./ImagesWithName.css";

function ImagesWithNames() {
  return (
    <>
      <div className="animals-container">
        {
          animalImages.map((animalImage, index) => (
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