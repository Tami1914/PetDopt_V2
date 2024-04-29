import { useState } from "react";
import AdoptService from "../../assets/services/firebase/adoptService";

function Adoption() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [animal, setAnimal] = useState("");

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeBreed = (e) => {
    setBreed(e.target.value)
  }

  const changeAnimal = (e) => {
    setAnimal(e.target.value)
  }

  const addNewAnimals = (e) => {
    e.preventDefault();
    
    saveAnimals(e.target.name.value, e.target.breed.value,
    e.target.animal.value);
  }

  const saveAnimals = (name, breed, animal) => {
    AdoptService.addAnimals(name, breed, animal).then((response) => {
      console.log("ok lo guardaste")
    })
  }


  return (
    <>
      <form onSubmit={addNewAnimals}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={changeName} />
        <label htmlFor="name">Breed:</label>
        <input type="text" id="breed" name="breed" value={breed} onChange={changeBreed} />
        <label htmlFor="name">Animal:</label>
        <input type="text" id="animal" name="animal" value={animal} onChange={changeAnimal} />

        <button type="submit">Add Animal</button>
      </form>
    </>
  )
}

export default Adoption;