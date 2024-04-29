import db from "./firebase.config.js";
import { push, ref } from "firebase/database";

const refAnimals = ref(db, "/adopt");

const getAllAnimals = () => {

}

const addAnimals = (name, breed, animal) => {
  return push(refAnimals, {
    name: name,
    breed: breed,
    animal: animal
  })
}

export default {
  getAllAnimals,
  addAnimals
}