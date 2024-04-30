// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5pGxq85fn1zMEmqCVAn-4RIxZmap8Yjs",
  authDomain: "petdoptv2.firebaseapp.com",
  databaseURL: "https://petdoptv2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petdoptv2",
  storageBucket: "petdoptv2.appspot.com",
  messagingSenderId: "663137294051",
  appId: "1:663137294051:web:2a8b3da403df0ad9d7d7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;




/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWoynGtmXszpTifJVstLrlf0O75IORso",
  authDomain: "petdopt-a67b3.firebaseapp.com",
  projectId: "petdopt-a67b3",
  storageBucket: "petdopt-a67b3.appspot.com",
  messagingSenderId: "745061264287",
  appId: "1:745061264287:web:c2b71304dc89ea21c22baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db; */