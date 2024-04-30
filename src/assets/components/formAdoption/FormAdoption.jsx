import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import adoptService from "../../services/firebase/adoptService";
import "./FormAdoption.css";
import { faPoop } from "@fortawesome/free-solid-svg-icons/faPoop";

function FormAdoption() {
    const [animals, setAnimals] = useState([]);
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

    useEffect(() => {
        getAllAnimals();
    }, []);

    return (
        <>
            <div className="form-container">
                <form onSubmit={addAnimals} className="adoption-form" ref={refForm}>
                    <input className="rounded-input" type="text" name="name" placeholder="name" />
                    <input className="rounded-input" type="text" name="breed" placeholder="breed" />
                    <input className="rounded-input" type="text" name="animal" placeholder="animal" />
                    <input className="rounded-input" type="submit" value="Add Animal" />
                </form>

                <div className="animals-list">
                    {animals.map(a =>
                        <div className="animal-item" key={a.key}>
                            <p>{a.name} {a.breed} {a.animal}</p>
                            <FontAwesomeIcon className="delete-animal" icon={faPoop} onClick={() => removeAnimals(a.key)}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FormAdoption;