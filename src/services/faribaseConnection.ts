import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBtyLXVTKeCoduzJjXKGPAElUBxENGkNQg",
  authDomain: "react-6ff6c.firebaseapp.com",
  projectId: "react-6ff6c",
  storageBucket: "react-6ff6c.appspot.com",
  messagingSenderId: "711682161574",
  appId: "1:711682161574:web:53f99072cfc8582b242d67"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db =getFirestore(app);

export {auth, db};