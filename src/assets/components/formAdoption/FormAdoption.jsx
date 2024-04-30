import { useState, useEffect } from "react";
import adoptService from "../../services/firebase/adoptService";
import "./FormAdoption.css";

function AddAnimal() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [animal, setAnimal] = useState("");
    const [list, setList] = useState([]);
    const [animalIndex, setAnimalIndex] = useState(null);

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeBreed = (e) => {
        setBreed(e.target.value)
    }

    const changeAnimal = (e) => {
        setAnimal(e.target.value)
    }

    const addNewAnimal = (e) => {

        saveAnimal(e.target.name.value, e.target.breed.value, e.target.animal.value);
    }

    const saveAnimal = (name, breed, animal) => {
        adoptService.addAnimal(name, breed, animal).then((response) => {
            console.log("animal registrado")
        })
    }

    const getAllAnimals = () => {
        adoptService.getAllAnimals().then((items) => {
            let auxAnimals = [];
            items.forEach((item) => {
                const key = item.key;
                const data = item.val();

                const auxAnimal = {
                    key: key,
                    name: data.name,
                    breed: data.breed,
                    animal: data.animal
                }
                auxAnimals.push(auxAnimal);
            })
            setList([...auxAnimals]);
        });
    }

    useEffect(() => {
        getAllAnimals();
    }, [])

    const deleteAnimals = (key) => {
        adoptService.removeAnimals(key).then(() => {
            getAllAnimals()
        })
    }

    const editAnimal = (key, index) => {
        const selectedAnimal = list[index];
        setName(selectedAnimal.name);
        setBreed(selectedAnimal.breed);
        setAnimal(selectedAnimal.animal);
        setAnimalIndex(index);
        deleteAnimals(key);
    };

    return (
        <>
            <div className="form-main-container">
                    <form onSubmit={addNewAnimal}>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" value={name} onChange={changeName} />
                        <label htmlFor="name">Raza:</label>
                        <input type="text" id="breed" name="breed" value={breed} onChange={changeBreed} />
                        <label htmlFor="name">Animal:</label>
                        <input type="text" id="animal" name="animal" value={animal} onChange={changeAnimal} />

                        <button type="submit">{animalIndex !== null ? "Editar Animal" : "Añadir animal"}</button>
                    </form>

                <div className="show-animal-list">
                    {
                        list.map((l, index) => (
                            <div key={l.key} className="show-animal-list-elements">
                                <p>{l.name}</p>
                                <p>{l.breed}</p>
                                <p>{l.animal}</p>
                                <button className="delete-button" onClick={() => deleteAnimals(l.key)}>Borrar</button>
                                <button className="edit-button" onClick={() => editAnimal(l.key, index)}>Editar</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AddAnimal;