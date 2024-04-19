import animalShelters from "../../services/animalShelters/animalShelters";
import "./Shelter.css";

function Shelter() {
  return (
    <>
      <div className="shelter-container">
        {
          animalShelters.map((animalShelter, index) => (
            <div className="shelter-container-text-image">
              <div className="shelter-container-img" key={index}>
                <img src={`/images/${animalShelter.fileName}`} alt="imagen" />
              </div>

              <div className="shelter-container-text">

                <div className="shelter-text-tittle">
                  <h2>{animalShelter.tittle}</h2>
                  <p>{animalShelter.ubication}</p>
                  <p>{animalShelter.cases}</p>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Shelter;