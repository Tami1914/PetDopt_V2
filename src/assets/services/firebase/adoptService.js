import db from "./firebase.config.js";
import { push, ref, get, remove, set } from "firebase/database";

const refAnimals = ref(db, "/adopt");

const getAllAnimals = () => {
  return get(refAnimals);
};

const addAnimals = (name, breed, animal) => {
  return push(refAnimals, {
    name: name,
    breed: breed,
    animal: animal
  })
};

const removeAnimals = (key) => {
  const dbRefAnimals = ref(db, `/adopt/${key}`);
  return remove(dbRefAnimals);
}

const editAnimals = (key, newData) => {
  const dbRefAnimals = ref(db, `/adopt/${key}`);
  return set(dbRefAnimals, newData);
} 

export default {
  getAllAnimals,
  addAnimals,
  removeAnimals,
  editAnimals
};