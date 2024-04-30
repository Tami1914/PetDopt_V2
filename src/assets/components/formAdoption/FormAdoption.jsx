import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adoptService from "../../services/firebase/adoptService";
import "./FormAdoption.css";
import { faPoop } from "@fortawesome/free-solid-svg-icons/faPoop";

function FormAdoption() {
    const [animals, setAnimals] = useState([]);
    const [editingKey, setEditingKey] = useState([]);
    const refForm = useRef();

    const getAllAnimals = () => {
        adoptService.getAllAnimals()
            .then((items) => {
                let allAnimals = [];
                items.forEach(item => {
                    const key = item.key;
                    const data = item.val();
                    allAnimals.push({
                        key: key,
                        name: data.name,
                        breed: data.breed,
                        animal: data.animal
                    });
                });
                setAnimals([...allAnimals]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const removeAnimals = (key) => {
        adoptService.removeAnimals(key).then((res) => {
            getAllAnimals();
        })
    }

    const addAnimals = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const breed = e.target.breed.value;
        const animal = e.target.animal.value;
        adoptService.addAnimals(name, breed, animal).then((res) => {
            refForm.current.reset();
            setAnimals(oldValues => [...oldValues, { key: res.key, name, breed, animal }])
        })
    }

    const editAnimals = (key, newData) => {
        adoptService.editAnimals(key, newData)
            .then(() => {
                setEditingKey(null);
                getAllAnimals();
            });
    }; 

  /*   const editAnimals = (key) => {
        setEditingKey(null);
        removeAnimals(key);
    }; */

    useEffect(() => {
        getAllAnimals();
    }, []);

    return (
        <>
            <div className="form-container">
                <form onSubmit={addAnimals} className="adoption-form" ref={refForm}>
                    <input className="rounded-input" type="text" name="name" placeholder="nombre" />
                    <input className="rounded-input" type="text" name="breed" placeholder="raza" />
                    <input className="rounded-input" type="text" name="animal" placeholder="animal" />
                    <input className="rounded-input" type="submit" value="Añadir animal" />
                </form>

                <div className="animals-list">
                    {animals.map((a) => (
                        <div className="animal-item" key={a.key}>
                            <ul>
                                <li>
                                    {editingKey === a.key ? (
                                        <>
                                            <form onSubmit={addAnimals}>
                                                <input defaultValue={a.name} className="edit-input" type="text" name="name" />
                                                <input defaultValue={a.breed} className="edit-input" type="text" name="breed" />
                                                <input defaultValue={a.animal} className="edit-input" type="text" name="animal" />
                                                <input className="rounded-input" type="submit" value="Editar animal" />
                                            </form>
                                        </>
                                    ) : (
                                        `${a.name} ${a.breed} ${a.animal}`
                                    )}
                                </li>
                            </ul>
                                <button onClick={() => editAnimals(a.key)}>Editar</button>
                            <FontAwesomeIcon className="delete-animal" icon={faPoop} onClick={() => removeAnimals(a.key)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FormAdoption;



/* import { useState } from "react";
import VideogameService from "../../services/firebase/videogames.service.js";

function AddVideoGame() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const addNewVideoGame = (e) => {
    e.preventDefault();
    
    saveVideogame(e.target.name.value, e.target.price.value);
  }

  const saveVideogame = (name, price) => {
    VideogameService.addVideogame(name, price).then((response) => {
      console.log("ok lo guardaste")
    })
  }


  return (
    <>
      <form onSubmit={addNewVideoGame}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={changeName} />
        <label htmlFor="name">Price:</label>
        <input type="number" id="price" name="price" value={price} onChange={changePrice} />

        <button type="submit">Add Videogame</button>
      </form>
    </>
  )
}

export default AddVideoGame; */
